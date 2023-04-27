var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: {
        type : String,
    },
    email: {
        type : String,
    },
    mobileNumber : {
        type : Number,
    },
    message : {
        type : String,
    },
    fileName : {
        type : String,
        
    },
    
});
  
  
module.exports = new mongoose.model('Image', imageSchema);