const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({ 
    // _id: mongoose.Schema.Types.ObjectId,
    title: String,
    body: String,
    category_ids: [mongoose.Schema.Types.ObjectId]
}, {
    timestamps: true // manage createdAt, updatedAt automatically
})

const blogModel = mongoose.model('Blogs', blogSchema, 'blogs')

module.exports =  blogModel