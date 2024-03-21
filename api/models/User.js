const mongoose =require("mongoose")

const userSchema= mongoose.Schema({
    googleId:String,
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        // required:true,
    },
    bio:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        // required:true,
    },
    isAdmin:{
        type:Boolean,
        // required:true,

    },
    courses: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course' 
        }
        ],
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)