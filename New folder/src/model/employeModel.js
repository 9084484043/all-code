const mongoose = require("mongoose")

const ObjectId =mongoose.Schema.Types.ObjectId

const employeSchema = new mongoose.Schema({
    Name :{
        type:String,
        require:true
      },
    Day :{
        type:String,
        require:true
      },
    userId:{
        type:ObjectId,
        require:true,
        ref:"user"
    },
     projectName :{   
        type:String 
      },
      description :{
        type:String 
      },
      remark :{
        type:String 
      },

},{timestamps:true})



module.exports = mongoose.model('employe',employeSchema)