const mongoose = require('mongoose');

async function connectDB() {
    const connection = 'mongodb://127.0.0.1:27017/blogs'

    return new Promise((resolve, reject) => {
        mongoose.connect(connection)
        .then(() => {
            console.log('Connected to MongoDB database');
            resolve();
        })
        .catch((err) => {
            console.log('Could not connect to database')
            reject(err);
        })
    })
}

module.exports = connectDB