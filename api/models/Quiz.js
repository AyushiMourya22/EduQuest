const mongoose=require("mongoose")

const quizSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,

    },
    questions:[
        {
            question:{
                type:String,
                required:true
            },
            options:{
                type:[String],
                required:true
            },
            correctOptions:{
                type:[String],
                required:true
            },
        }
    ],
    marks:[
        {
            userId:{
                type:mongoose.Schema.type.objestId,
                ref:"User",
                required:true
            },
            score:{
                type:Number,
                required:true
            }
        }
    ]
})


module.exports=mongoose.model("Quiz",quizSchema)