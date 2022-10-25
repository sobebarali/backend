const express = require('express')
const Movie = require('./movie.js')

const app = express()
app.use(express.json())

const movie = new Movie()

const movieRouter = express.Router()

/** Create an Movie */
movieRouter.post('/movies',async (req, res) => {

    const info = req.body

    await movie.addMovie(info)
   
    res.send({
        message: "Movie has been added"
    })
})


/** Get all Movies **/
movieRouter.get('/movies',async (req, res) => {
    try {
        const movies = await movie.getAll()

        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

/** Search a Movie **/
movieRouter.get('/movies/:query',async (req, res) => {
    try {
        const query = req.params.query

        const info = await movie.searchMovie(query)

        res.status(200).send(info)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


/** Update an Movie */
movieRouter.patch('/movies/:id',async (req, res) => {

    const id = req.params.id

    const updatedInfo = req.body

    await movie.updateMovie(id,updatedInfo)
    
    return res.status(200).send({
        message: 'Movie updated successfully'
    })
})

/** Delete an Movie */
movieRouter.delete('/movies/:id',async (req, res) => {

    const id = req.params.id
    
    try {
        await movie.deleteMovie(id)

        return res.send({
            message: "Movie has been deleted"
        })

    } catch(error) {

        res.status(500).send({
            message: error.message
        })
    }
})

/** Get Movie by id */ 
movieRouter.get('/movies/id/:id',async (req, res) => {

    const id = req.params.id
    
    const info = await movie.getById(id)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Movie does not exist."
        })
    }
})

/** Get Movie by title */
movieRouter.get('/movies/title/:title',async (req, res) => {

    const title = req.params.title
    
    const info = await movie.getByTitle(title)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Movie does not exist."
        })
    }
})

/** Get Movie by rating */
movieRouter.get('/movies/rating/:rating',async (req, res) => {

    const rating = req.params.rating
    
    const info = await movie.getByRating(rating)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Movie does not exist with this rating"
        })
    }
})


app.use(movieRouter)

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000')
})