const mongoose=require("mongoose")

const lessonSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    notes:{
        type:[String],
    },

})

module.exports=mongoose.model("Lesson",lessonSchema)