// const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user/user-model");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs");

// console.log(process.env.CLIENT_ID);

//passport configure for manual authentication
passport.use(new LocalStrategy({
    usernameField:"email"
}, async function verify(email,password,done){
    // console.log(email);
    const user = await User.findOne({email});
    if(!user){
        return done(null,false,{message:"User does not exist"});
    }
    if(!user.password){
        return done(null,false,{message:"Something went wrong. Try to log in through Google"});
    }
    const isValidPass = await bcrypt.compare(password,user.password);
    if(!isValidPass){
        return done(null,false,{message:"Incorrect credentials."});
    }
    done(null,user);
}))

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:"/auth/google/callback"
}, async function verify(accessToken, refreshToken, profile, cb){
    // console.log(profile)

    try {
        const user = await User.findOne({email:profile.emails[0].value})
        if(!user){
            const newUser = await new User({
                displayName:profile.displayName,
                googleId:profile.id,
                firstName:profile.name.givenName,
                lastName:profile.name.familyName,
                profilePhoto:profile.photos[0].value,
                email:profile.emails[0].value,
                isverified:true
            }).save();
            if(newUser){
                cb(null, newUser);
            }
        }
        else{
            user.displayName=profile.displayName;
            user.googleId=profile.id,
            user.firstName=profile.name.givenName;
            user.lastName=profile.name.familyName;
            user.profilePhoto=profile.photos[0].value,
            await user.save();
            cb(null, user);
        }
        
    } catch (error) {
        console.log(error);
    }
} ))

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user);
    })
    .catch(err=>{
        done(err);
    })
})

