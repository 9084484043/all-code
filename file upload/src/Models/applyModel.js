const mongoose = require("mongoose");
const validator = require('validator');
const applySchema = new mongoose.Schema(
  {
    name: {
        type : String,
        required : [true, 'Please fill the name'],
        minlength : 2,
        maxlength : 20, 
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
         minlength: 20,
        maxlength: 1000
    },
    fileName : {
        type : [],
        required : [true, 'Please upload file'],
    }  
  },
  
);

module.exports = mongoose.model("Apply", applySchema);
