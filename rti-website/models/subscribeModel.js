const mongoose = require('mongoose');
const validator = require('validator')

const subscribeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill your name']
    },
    email: {
        type: String,
        required: [true, 'Please fill your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, ' Please provide a valid email']
    },
})
const Subscribe = mongoose.model('Subscribe', subscribeSchema);
module.exports = Subscribe;

