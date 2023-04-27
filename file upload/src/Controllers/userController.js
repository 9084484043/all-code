const applyModel = require("../Models/applyModel");
const multer = require('multer')

const apply = async (req, res) => {
     try {
        let data = req.body;
        let fileName = req.file
        let { name, email, mobileNumber,message} = data;

        if (fileName.length == 0)
        return res.status(400).send({ status: false, message: "upload profile image" });
        if (fileName.length > 1)
        return res.status(400).send({ status: false, message: "only one image at a time" });
         let uploadedFileURL = await applyModel(fileName);

        let obj = {
                    name:name,
                    email:email,
                    mobileNumber:mobileNumber,
                    message:message,
                     fileName : uploadedFileURL
                    
                };
                 console.log(req.file);
        let result = await applyModel.create(obj);
        return res.status(201).send({ status: true, message: 'Success', data: result });
    } catch (err) {
        console.log(err.message);
       return res.status(500).send({ status: false, message: err.message });
    }
};


module.exports = { apply }; 







