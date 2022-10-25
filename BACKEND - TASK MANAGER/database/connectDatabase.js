const mongoose = require('mongoose')
require('dotenv').config()

const connectDatabase = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB database')
            resolve()
        })
        .catch((err) => {
            console.log('Could not connect to database')
            reject(err)
        })
    })
}

module.exports = connectDatabase