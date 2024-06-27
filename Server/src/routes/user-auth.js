const router = require("express").Router();
const User = require("../modules/user-model.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.post("/", async (req,res)=>{
    try {
        const reqBody = req.body();

        const user = await User.findOne({email:reqBody.email});
        if(!user){
            return res.send({error:"User already present",success:false,status:400});
        }
        
        const hashedPassword = await bcrypt.hash(reqBody.password,10);
        const userData = {username:reqBody.username, email:reqBody.email, password:hashedPassword}
        await User.create(userData);
        

    } catch (error) {
        
    }
})


// TODO : manual method to be implemented and Oauth to be tested

router.get('/status',(req,res)=>{
    if(req.user){
        res.status(200).json({authenticated:true, user:req.user});
    }
    else{
        res.status(401).json({authenticated:false});
    }
})

router.get("/google",passport.authenticate("google"));

router.get("/google/callback",passport.authenticate("google",{
    successRedirect:`${process.env.VITE_APP_URL}/dashboard`,
    failureRedirect:`${process.env.VITE_APP_URL}/login`
}))

module.exports = router;