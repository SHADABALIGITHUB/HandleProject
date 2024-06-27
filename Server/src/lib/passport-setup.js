// const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const User = require("../modules/user-model");

passport.use(new GoogleStrategy({
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackUrl:"/auth/google/callback",
    scope:['profile']
}, async function verify(accessToken, refreshToken, profile, cb){
    console.log(profile)

    try {
        const user = await User.findOne({googleId:profile.id})
        if(!user){
            const newUser = await new User({
                displayName:profile.displayName,
                googleId:profile.id,
                firstName:profile.name.givenName,
                lastName:profile.name.familyName,
                profilePhoto:profile.photos[0].value,
                email:profile.emails[0].value
            }).save();
            if(newUser){
                cb(null, newUser);
            }
        }
        else{
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

