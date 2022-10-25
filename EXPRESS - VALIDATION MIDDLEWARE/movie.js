const fs = require("fs")

class Movie {
  constructor() {
    this.path = "movies.json"

    const content = fs.readFileSync(this.path, {
      encoding: "utf-8",
    })

    this.data = JSON.parse(content)
  }

  saveMovie() {
    const content = JSON.stringify(this.data, null, 2)

    fs.writeFileSync(this.path, content, {
      encoding: "utf-8",
    })
  }

  addMovie(info) {
    let id = 1

    const movies = this.data.movies

    movies.forEach((movie) => {
      if (id <= movie.id) {
        id = movie.id + 1
      }
    })

    info.id = id

    movies.push(info)

    this.saveMovie()
  }

  updateMovie(id,updatedInfo) {
    const movies = this.data.movies

    let index = null

    movies.find((movie, idx) => {
      if (movie.id === id) {
        index = idx
      }

      return movie.id === id
    })

    if (index == -1) {
      return res.status(404).send({
        message: "movie not found"
      })
    }

    let movie = this.data.movies[index]

    movie = {
        ...movie, // existing data
        ...updatedInfo, // overwrite keys with updated values
    }

    this.data.movies[index] = movie;

    this.saveMovie()

    return movie;
  }

  deleteMovie(id) {
    let index = null

    const movies = this.data.movies

    movies.find((movie, idx) => {
      if (movie.id === id) {
        index = idx
      }

      return movie.id === id
    })

    if (index === null) {
      throw new Error("Movie does not exist")
    }

    movies.splice(index, 1)

    this.data.movies = movies

    this.saveMovie()
  }

  getAll() {
    const movies = this.data.movies

    return movies
  }

  getById(id) {
    const movies = this.data.movies

    const movie = movies.find((movie) => movie.id === id)

    return movie
  }
}

module.exports = Movie
