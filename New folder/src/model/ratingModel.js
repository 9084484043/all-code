const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  

userId:{
    type :mongoose.Schema.Types.ObjectId,
    require:true,
    ref : "user"
},
   
    rating:{
        type:Number,
        minlength:1,
        maxlength:5,
        require:true
      }

});


module.exports = mongoose.model('rating',ratingSchema)
