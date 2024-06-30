const router = require("express").Router();
const User = require("../models/user-model.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const sendMail = require("../lib/send-mail.js");
const generateOtp = require("../lib/generateOtp.js");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req,res)=>{
    try {
        const reqBody = req.body;

        const user = await User.findOne({email:reqBody.email});
        if(user){
            return res.status(200).json({message:"Email is already registered",success:false});
        }
        
        const hashedPassword = await bcrypt.hash(reqBody.password,10);
        const otp = generateOtp();
        const userData = {displayName:reqBody.username, email:reqBody.email, password:hashedPassword, isverifiedtoken:otp};

        const token = jwt.sign(userData,process.env.SESSION_SECRET);
        res.cookie("token",token,{maxAge:5*60000,httpOnly:true})
        // await User.create(userData);

        sendMail({email:reqBody.email, otp});
        return res.status(200).json({message:"Otp has been sent to email for verification",success:true});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error,message:"Internal server error"});
        // res.redirect(`${process.env.VITE_APP_URL}/servererror`);
    }
})

router.post("/verify", async (req,res)=>{
    try {
        const token = req.cookies.token;
        const userData = jwt.decode(token);
        res.clearCookie("token");
        // console.log(userData);
        const {otp} = req.body;
        // const user = await User.findOne({email:userData.email});

        if(otp!==userData.isverifiedtoken){
            return res.status(400).json({error:"Incorrect OTP",success:false});
        }

        userData.isverified=true;
        userData.isverifiedtoken = null;
        // console.log(userData);
        await User.create(userData);
        // await user.save();
        return res.status(200).json({message:"Verification successfull",success:true});

    } catch (error) {
        res.status(500).json({error,message:"Internal server error"});
        // res.redirect(`${process.env.VITE_APP_URL}/servererror`);
    }
})

router.patch("/verify/resend",async (req,res)=>{
    try {
        const {email} = req.body;
        const otp = generateOtp();
        await User.findOneAndUpdate({email},{isverifiedtoken:otp});
        sendMail({email,otp});
        return res.status(200).json({message:"Otp resended to email",success:true});
    } catch (error) {
        res.status(500).json({error,message:"Internal server error"});
        // res.redirect(`${process.env.VITE_APP_URL}/servererror`);
    }
})

router.post("/login",async(req,res)=>{
    passport.authenticate('local',(err,user,info)=>{
        // console.log(err,user,info);
        if(err){
            return res.status(500).json({error:"Internal server error",success:false});
        }
        if(user){
            req.login(user,(err)=>{
                if(err){
                    return res.status(500).json({error:"Error while logging in",success:false});
                }
                return res.status(200).json({message:"Logged in successfully",success:true});
            })
        }
        else{
            // console.log(info.message);
            return res.status(401).json({error:info.message,success:false});
        }
    })(req,res)
})


// TODO : Oauth to be tested

router.get('/status',(req,res)=>{
    // console.log(req);
    if(req.user){
        return res.status(200).json({authenticated:true, user:req.user});
    }
    else{
        return res.status(401).json({authenticated:false});
    }
})

router.get("/google",passport.authenticate("google",{scope:['profile','email']}));

router.get("/google/callback",passport.authenticate("google",{
    failureRedirect:`${process.env.VITE_APP_URL}/register`,failureMessage:true
}),(req,res)=>{
    res.redirect(`${process.env.VITE_APP_URL}/dashboard`);
})

router.get("/logout",(req,res)=>{
    req.logOut(function(err){
        if(err){
            return res.status(500).json({error:err,success:false});
        }
        // res.redirect(`${process.env.VITE_APP_URL}/login`);
        return res.status(200).json({message:"Successfully logged out",success:true});
    });
})

module.exports = router;