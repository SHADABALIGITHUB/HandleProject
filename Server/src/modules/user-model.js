const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    displayName:{
        type:String
    },
    googleId:{
        type:String,
        unique:true
    },
    // username:{
    //     type:String,
    //     required:[true,"Username is required"],
    //     minLength:[5,"Username must be 5 characters long"]
    // },
    firstName:String,
    lastName:String,
    profilePhoto:String,
    email:{
        type:String,
        required:[true,"Email is required"],
        match:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    },
    password:{
        type:String,
        minLength:[8,"Password must be at least 8 characters long"],
        match:"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    },
    isverified:{
        type:Boolean,
        default:false
    },
    isverifiedtoken:String,
    isverifiedtokenexpiry:{
        type:Date
    },
    isforgotpasswordtoken:String,
    isforgotpasswordtokenexpiry:{
        type:Date
    }
})

module.exports = mongoose.models.users || mongoose.model("users",UserSchema);