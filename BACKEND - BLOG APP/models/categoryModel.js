const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({ // Class
    // _id: mongoose.Types.ObjectId,
    name: String
})

const categoryModel = mongoose.model('Categories', categorySchema, 'categories')

module.exports =  categoryModel