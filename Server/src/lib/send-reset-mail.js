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

const sendPasswordResetMail = async ({email,token}) => {
    console.log("sending mail")
    try {
        const info = await transporter.sendMail({
            from:process.env.EMAIL,
            to:email,
            subject:"Reset password",
            html:`<p>Click <a href="${process.env.VITE_APP_URL}/reset/${email}/${token}">here</a> to reset your password or copy this URL ${process.env.VITE_APP_URL}/reset/${email}/${token}</p></br>
            <p>Do not share this URL with anyone </p>`
        })
    
        console.log(`Mail sent successfully ${info.messageId}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendPasswordResetMail;