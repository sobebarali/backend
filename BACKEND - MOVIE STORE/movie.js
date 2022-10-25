const connectDB = require("./database/connectDB.js")
const movieModel = require('./database/movieModel.js')

class Movie {
  constructor() {
    connectDB()
        .catch((err) => {
            console.log(err.message);
        })
  }

  async addMovie(info) {
    await movieModel.create(info);
  }

  async getAll() {
    return movieModel.find()
  }

  async searchMovie(query){
    return movieModel.find({name: {$regex: query}});
  }

  async updateMovie(id,updatedInfo) {
    return movieModel.findByIdAndUpdate(id, updatedInfo);
  }

  async deleteMovie(id) {
    return movieModel.findByIdAndDelete(id);
  }

  async getById(id) {
    return movieModel.findById(id);
  }

  async getByTitle(title){
    return movieModel.find({title: title})
  }

  async getByRating(rating){
    return movieModel.find({rating: rating})
  }
}

module.exports = Movie
