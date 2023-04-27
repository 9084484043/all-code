const mongoose = require("mongoose");

const bcriptSchema = new mongoose.Schema(
  {
   
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
  
    password: {
      type: String,
      required: true,
      trim: true,
      
    }, // encrypted password
   
  },
 ); 

module.exports = mongoose.model("bcript", bcriptSchema);