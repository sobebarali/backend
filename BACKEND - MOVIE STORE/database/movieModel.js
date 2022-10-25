const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true, 
    }, 
    rating: Number, 
    description: String, 
    title: String,
    genre: String
})

const movieModel = mongoose.model('Movies', movieSchema, 'movies')

module.exports = movieModel