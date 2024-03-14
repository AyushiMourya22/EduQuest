const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
  quizzes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    },
  ],
  enrolledUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  discussion:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Discussion'
    }
  ],
  instructor: {
    type: String,
    required: true,
  },
  prerequisite: {
    type: String,
  },
});


module.exports=mongoose.model("Course",courseSchema)