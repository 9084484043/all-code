const mongoose = require("mongoose")

const ratingModel = require("../model/ratingModel")
const userModel = require("../model/userModel")

module.exports.addRating =async function (req,res) {
try{
let userId = req.params.userId
if(!mongoose.isValidObjectId(userId)){
    return res.status(400).send({ Status: false, message: "invalid userId" });
}
let checkUser = await userModel.findOne({_id:userId})
if(!checkUser){
    return res.status(404).send({ Status: false, message: "user not found" });
}
let data = req.body

if(!(data.rating >= 1 && data.rating <= 5)){
    return res.status(400).send({ Status: false, message: "rating must be in between 1 to 5" });
}

let ratingDetail = await ratingModel.create(data)
return res.status(201).send({ status: true, msg: "rating created successfully", data :ratingDetail });


} catch (error) {
        res.status(500).send({ status: false, error: error.message });
      }
}