const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const profileSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: [],
        required: true,
    },
    userId: {
        type: ObjectId,
        required: true,
        ref: "user"
    },

}, { timestamps: true });


module.exports = mongoose.model('UserProfile', profileSchema) 
