const mongoose = require("mongoose")
const UserModel = require("../models/UserModel")
const profileModel = require("../models/profileModel")


const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'daffulcrv', 
    api_key: '824947271643376', 
    api_secret: 'IOpD-lHImhBkwf6QJgxbc2Gzx24' 
  });


  module.exports.createProfile =  (req, res) => {
        let file = req.files.image

cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    product = new profileModel({
        fname:req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone,
        image : result.url, 
        userId:req.body.userId,
    });
    product.save()
    .then((result) => {
        res.status(201).send({
          message: "success",
          result,
        });
      }).catch((error) => {
        res.status(500).send({
          message: "failure",
          error,
        });
      }); 
})
}



//----------------------------get userProfile-----------------------------------//


module.exports.getProfile = async function (req, res) {
    try {
        let userFound = await profileModel.find(req.query);
        res.status(200).send({ status: true, message: userFound });

    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}


//............................update profile......................................//


module.exports.update = async function (req, res) {
    try {
        let data = req.body
        let userId = req.params.userId
        if(Object.keys(data).length==0)
        return res.status(404).send({ msg: "No data for Update " })
        
        if(!mongoose.isValidObjectId(userId))
        return res.status(400).send({ Status: false, message: "Please enter valid userId " })
            let updatedUser = await profileModel.findOneAndUpdate({ userId: userId }, {
                $set: {
                    fname: data.fname,
                    lname: data.lname,
                    phone: data.phone,
                },
            }, { new: true, upsert: true }) 
            return res.status(200).send({ status: true, msg: updatedUser })
   
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message }) 
        
    }
}