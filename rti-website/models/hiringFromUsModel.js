const mongoose = require("mongoose");
const validator = require('validator');
const hiringSchema = new mongoose.Schema(
  {
    Name: {
      type : String,
      required : [true, 'Please fill the name'],
  },
  Designation: {
      type : String,
      required : [true, 'Please fill the Designation'], 
  },
  companyName: {
      type : String,
      required : [true, 'Please fill the companyName'],
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
      min:10
  },
  Role : {
      type : String,
      required : [true, 'Please fill the message'],
  },
  Positions : {
    type : Number,
    required : [true, 'Please enter the number of positions'],
} ,
  Timeline : {
    type : Number,
    required : [true, 'Please enter the timeline'],
}  
    
  },
  
);

module.exports = mongoose.model("hiring", hiringSchema);