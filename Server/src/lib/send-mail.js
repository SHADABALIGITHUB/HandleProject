const nodemailer = require("nodemailer")

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: 'smtp.gmail.com',
   port: 465,
   secure: true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS
    }
})

const sendMail = async ({email,otp})=>{
    const info = await transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:"OTP for user verification",
        text:`Your OTP is ${otp}`
    })

    console.log(`Mail sent successfully ${info.messageId}`);
}

module.exports = sendMail;