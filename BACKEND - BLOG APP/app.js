const express = require('express')
const connectDB = require("./database/connectDB.js")
const categoryrouter = require('./routes/catergoryRouter.js')
const blogrouter = require('./routes/blogRouter.js')
const userrouter = require('./routes/userRouter.js')
const commentrouter =require('./routes/commentRouter.js')


const app = express()
app.use(express.json())

app.use(categoryrouter)
app.use(blogrouter)
app.use(userrouter)
app.use(commentrouter)


connectDB()
.then(() => {
    app.listen(3000, () => {
        console.log('Server is listening on http://localhost:3000')
    })
})