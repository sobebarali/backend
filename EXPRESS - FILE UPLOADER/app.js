const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


app.post('/profile', upload.single('avatar'), function (req, res, next) {
    try {
        return res.send({
            message: "File has been uploaded"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})