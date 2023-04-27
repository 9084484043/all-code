const Apply = require('../models/applyModel');
const base = require('./baseController')
const multer = require('multer');
exports.delete = async (req, res, next) => {
    try {
        await Apply.findByIdAndUpdate(req.apply.id, {
            active: false
        });

        res.status(204).json({
            status: 'success',
            data: null
        });


    } catch (error) {
        next(error);
    }
};


module.exports.apply = async (req, res) => {
    try {
       let data = req.body;
       let fileName = req.file
       let { name, email, mobileNumber,message} = data;
       let obj = {
                   name:name,
                   email:email,
                   mobileNumber:mobileNumber,
                   message:message,
                    fileName : fileName
                   
               };
              console.log(req.file);
       let result = await Apply.create(obj);
       return res.status(201).send({ status: true, message: 'Success', data: result });
   } catch (err) {
       console.log(err.message);
      return res.status(500).send({ status: false, message: err.message });
   }
};





exports.getAllApplys = base.getAll(Apply);
exports.getApply = base.getOne(Apply);


exports.updateApply = base.updateOne(Apply);
exports.deleteApply = base.deleteOne(Apply);