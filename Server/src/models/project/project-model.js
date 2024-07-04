const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema({
    id:{
        type:String,
        required:[true,"Id is required"]
    },
    displayName:{
        type:String,
        required:[true]
    },
    profilePhoto:{
        type:String
    },
    profile:{ //link of profile
        type:String,
        required:[true]
    }
})

const ProjectSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        maxLength:[100,"Title can be atmost 100 characters long"]
    },
    description:{
        type:String,
        minLength:[10,"Description should be at least 10 characters long"]
    },
    tags:[String],
    visibility:{
        type:Number,
        enum:[0,1],//0 for private and 1 for public
        required:[true,"Visibility is required"]
    },
    doc:{ // Date of creation
        type:Date,
        default:Date.now(),
    },
    members:{
        type:[MemberSchema],
        default:[]
    },
    creator:{
        type:MemberSchema,
        required:[true]
    }
})

ProjectSchema.pre('save',function(){
    this.members.push(this.creator);
})

module.exports = mongoose.models.projects || mongoose.model('projects',ProjectSchema);