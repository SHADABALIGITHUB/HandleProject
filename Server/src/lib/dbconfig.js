const mongoose = require("mongoose");

const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;