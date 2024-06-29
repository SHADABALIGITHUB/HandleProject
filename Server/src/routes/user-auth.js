const router = require("express").Router();
const User = require("../models/user-model.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const sendMail = require("../lib/send-mail.js");
const generateOtp = require("../lib/generateOtp.js");

router.post("/signup", async (req,res)=>{
    try {
        const reqBody = req.body;

        const user = await User.findOne({email:reqBody.email});
        if(user){
            return res.status(400).json({error:"User already present",success:false});
        }
        
        const hashedPassword = await bcrypt.hash(reqBody.password,10);
        const otp = generateOtp();
        const userData = {username:reqBody.username, email:reqBody.email, password:hashedPassword, isverifiedtoken:otp};
        await User.create(userData);

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
        const {email,otp} = req.body;
        const user = await User.findOne({email});

        if(otp!==user.isverifiedtoken){
            return res.status(400).json({error:"Incorrect OTP",success:false});
        }

        user.isverified=true;
        user.isverifiedtoken = null;
        await user.save();
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

router.post("/login", async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"User does not exist",success:false});
        }

        const isValidPass = bcrypt.compare(password,user.password);
        if(!isValidPass){
            return res.status(401).json({error:"Invalid credentials",success:false});
        }

        // res.cookie("id",user.id,{maxAge:60*60*24*1000, signed:true, httpOnly:true})
        req.session.userId = user.id;
        res.status(200).json({message:"Logged in successfully",success:true});

    } catch (error) {
        console.log(error);
        res.status(500).json({error,message:"Internal server error"});
        // res.redirect(`${process.env.VITE_APP_URL}/servererror`);
    }
})


// TODO : Oauth to be tested

router.get('/status',(req,res)=>{
    if(req.user){
        res.status(200).json({authenticated:true, user:req.user});
    }
    else{
        res.status(401).json({authenticated:false});
    }
})

router.get("/google",passport.authenticate("google",{scope:['profile','email']}));

router.get("/google/callback",passport.authenticate("google",{
    failureRedirect:`${process.env.VITE_APP_URL}/register`,failureMessage:true
}),(req,res)=>{
    res.redirect(`${process.env.VITE_APP_URL}/dashboard`);
})

router.get("/logout",(req,res)=>{
    req.logOut();
    res.redirect(`${process.env.VITE_APP_URL}/login`)
})

module.exports = router;