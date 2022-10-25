const express = require('express')
const Movie = require('./movie.js')

const app = express()
app.use(express.json())

const movie = new Movie('movies.json')

const movieRouter = express.Router()

/** Creating Validate Middleware  */
const validateMiddleware = (req, res, next) =>{
    
    const info = req.body

    
    if(!info.id){
        return res.status(400).send("id required")
    }else{
        if(typeof(info.id) != "number"){
            return res.status(400).send("id should be Number")
        }
    }

    if(!info.name){
        return res.status(400).send("name required")
    }else{
        if(typeof(info.name) != "string"){
            return res.status(400).send("name should be String")
        }
    }

    if(!info.rating){
        return res.status(400).send("rating required")
    }else{
        if(typeof(info.rating) != "number"){
            return res.status(400).send("rating should be Number")
        }
    }

    
    if(!info.description){
        return res.status(400).send("description required")
    }else{
        if(typeof(info.description) != "string"){
            return res.status(400).send("description should be String")
        }
    }

    if(!info.genre){
        return res.status(400).send("genre required")
    }else{
        if(typeof(info.genre) != "string"){
            return res.status(400).send("genre should be String")
        }
    }

    if(!info.caste){
        return res.status(400).send("caste required")
    }else{
        if(Array.isArray(info.caste) == false){
            return res.status(400).send("caste should be String array")
        }
    }

    next()
}

movieRouter.use(validateMiddleware)

/** Create an Movie */
movieRouter.post('/movies', (req, res) => {

    const info = req.body

    movie.addMovie(info)
   
    res.send({
        message: "Movie has been added"
    })
})


/** Get all Movies **/
movieRouter.get('/movies', (req, res) => {
    try {
        const movies = movie.getAll()

        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


/** Update an Movie */
movieRouter.patch('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const updatedInfo = req.body

    movie.updateMovie(id,updatedInfo)
    
    return res.status(200).send({
        message: 'Movie updated successfully'
    })
})

/** Delete an Movie */
movieRouter.delete('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    try {
        movie.deleteMovie(id)

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
movieRouter.get('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    const info = movie.getById(id)

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

app.use(movieRouter)

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000')
})