const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({

    name: {
        type : String,
        required : [true, 'Please fill the name'],
        min : 2,
        max : 20,
    },
    email: {
        type : String,
        required : [true, 'Please fill the email'],
        lowercase: true,
        validate: [validator.isEmail, ' Please provide a valid email'],
    },
    mobileNumber : {
        type : Number,
        required : [true, 'Please fill the mobile number'],
    },
    message : {
        type : String,
        required : [true, 'Please fill the message'],
        min : 20,
        max : 800,
    },
    
});
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;