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

const sendVerificationMail = async ({email,otp})=>{
    const info = await transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:"OTP for user verification",
        text:`Your OTP is ${otp}`
    })

    console.log(`Mail sent successfully ${info.messageId}`);
}

const sendPasswordResetMail = async ({email}) => {
    const info = await transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:"Reset password",
        html:`<p>Click <a href="${process.env.VITE_APP_URL}/reset/?type=password&email=${email}"></a> reset your password</p>`
    })

    console.log(`Mail sent successfully ${info.messageId}`);
}

module.exports = {sendVerificationMail,sendPasswordResetMail};