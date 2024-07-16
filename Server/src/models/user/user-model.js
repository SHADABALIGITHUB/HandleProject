const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    displayName: {
        type: String
    },
    googleId: {
        type: String,
        index: {
            unique: true,
            partialFilterExpression: { googleId: { $exists: true, $ne: null } }
        }
    },
    firstName: String,
    lastName: String,
    profilePhoto: String,
    email: {
        type: String,
        required: [true, "Email is required"],
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        minLength: [8, "Password must be at least 8 characters long"]
    },
    isverified: {
        type: Boolean,
        default: false
    },
    isverifiedtoken: String,
    isverifiedtokenexpiry: {
        type: Date
    },
    isforgotpasswordtoken: String,
    isforgotpasswordtokenexpiry: {
        type: Date
    },
    username: {
        type: String,
        unique:true,    
        required: [true, "can't be blank"],
        minLength: [5, "can't be less than 5"],
        maxlength: [15, "can't be greater than 15"]
    },
    skillset:{
        type:[String]
    },
    bio:{
        type:[String]
    },
    links:[String],
    badges:{
        type:Number,
        enum:[1,2,3,4] // 4->bronze ..... 1->platinum
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.models.users || mongoose.model("users", UserSchema);