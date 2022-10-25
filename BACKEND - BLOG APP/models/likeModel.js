const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    blog_id: [mongoose.Schema.Types.ObjectId],
    user_id: [mongoose.Schema.Types.ObjectId],
    emoji: String
})

const likeModel = mongoose.model('Likes', likeSchema, 'likes')

module.exports =  likeModel