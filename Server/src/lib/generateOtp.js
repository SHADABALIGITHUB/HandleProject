const generateOTP = () => {
    let otp = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
        otp += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return otp;
}

module.exports = generateOTP;