const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ // Class
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    social_profile: {
        linkedIn: String,
        facebook: String,
        twiter: String,
        github: String,
        instagram: String,
    },
    addresses: [{
        Line1: String,
        City: String,
        State: String,
        PinCode: String,
    }],
    blog_id: [mongoose.Schema.Types.ObjectId]
})

const userModel = mongoose.model('Users', userSchema, 'users') // 'User' -> 'users'

module.exports = userModel