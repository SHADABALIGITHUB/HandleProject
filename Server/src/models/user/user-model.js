const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        minLength: [5, "can't be less than 5"],
        maxlength: [15, "can't be greater than 15"]
    },
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

    skillset: {
        type: [String]
    },
    bio: {
        type: [String]
    },
    // links: [String],
    badges: {
        type: Number,
        enum: [1, 2, 3, 4] // 4->bronze ..... 1->platinum
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 160,
    },
    location: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    bio:{
        type:String,
        maxlength:[1000,"Can't be more than 1000 characters"]
    },
    website: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    company: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    project: {
        type: [String],
        ref: 'Project'
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    likedProjects: [{  // projects liked by other users user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    mylikedProjects: [{  // projects liked by you
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    savedProjects: [{  // projects saved by you 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    updatedAt: {
        type: Date,
        default: Date.now,
    },

    socialLinks: {
        twitter: {
            type: String,
            trim: true,
        },
        linkedin: {
            type: String,
            trim: true,
        },
        github: {
            type: String,
            trim: true,
        },
        personal: {
            type: String,
            trim: true,
        },
    },
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
    }],
    mobileNumber: {
        type: String,
        trim: true,
        enum: [1, 0] // 1-> private ..... 0-> public
    },



})

module.exports = mongoose.models.users || mongoose.model("users", UserSchema);