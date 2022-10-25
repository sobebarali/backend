const express = require('express')
const Post = require('./controllers/post.js')
const validator = require("./middleware/validator.js")
const logger = require("./middleware/logger.js")
const gaurd = require("./middleware/gaurd.js")


const app = express()
app.use(express.json())


const post = new Post('posts.json')

const postRouter = express.Router()
const unProctedRoutes = express.Router()
const protectedRoutes = express.Router()

// This route is using a middleware(validator) &&  middleware(logger)
postRouter.use(validator)
postRouter.use(logger)


// This route is using middleware(logger) 
unProctedRoutes.use(logger)


// This routes is a middleware(logger) && middleware(gaurd)
protectedRoutes.use(logger)
protectedRoutes.use(gaurd)



/** Create an Post */
postRouter.post('/posts', (req, res) => {

    const info = req.body

    post.addPost(info)
   
    res.send({
        message: "Post has been added"
    })
})


/** Get all Posts **/
unProctedRoutes.get('/posts', (req, res) => {
    try {
        const posts = post.getAll()

        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


/** Update an Post */
protectedRoutes.patch('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const updatedInfo = req.body

    post.updatePost(id,updatedInfo)
    
    return res.status(200).send({
        message: 'Post updated successfully'
    })
})

/** Delete an Post */
protectedRoutes.delete('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    try {
        post.deletePost(id)

        return res.send({
            message: "Post has been deleted"
        })

    } catch(error) {

        res.status(500).send({
            message: error.message
        })
    }
})

/** Get Post by id */ 
unProctedRoutes.get('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id)
    
    const info = post.getById(id)

    if (info) {
        return res.send({
            data: info
        })
    } else {
        return res.status(404).send({
            message: "Post does not exist."
        })
    }

})

app.use(postRouter)
app.use(unProctedRoutes)
app.use(protectedRoutes)


app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000')
})