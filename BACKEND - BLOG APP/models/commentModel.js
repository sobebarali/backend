const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({ // Class
    _id: mongoose.Schema.Types.ObjectId,
    blog_id: [mongoose.Schema.Types.ObjectId],
    user_id: [mongoose.Schema.Types.ObjectId],
    message: String,
    rating: Number  
})

const commentModel = mongoose.model('Comment', commentSchema, 'comments')

module.exports =  commentModel