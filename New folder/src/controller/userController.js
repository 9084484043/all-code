const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')


module.exports.createUser =async function (req,res) {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
          return res.status(400).send({ Status: false, message: "Please provide all the details" });
        }
        let savedData = await userModel.create(data);
        return res.status(201).send({ status: true, msg: savedData });
      } catch (error) {
        res.status(500).send({ status: false, error: error.message });
      }
    };


//========================================================================================

    module.exports.login =async function (req,res) {
        try {
            let email =req.body.email
            let password =req.body.password
            let user = await userModel.findOne({email:email,password:password});
            if(!user)
            return res.status(401).send({
                status :false,
                msg:"user name or password is not correct"
             })
             
             let token = jwt.sign({
                userId :user._id,
             },
             process.env.SECRET_KEY
             );
             res.setHeader("x-api-key",token);
             res.status(200).send({ status: true, msg:"User login successful", token:token });
        } catch (error) {
            res.status(500).send({ status: false, error: error.message });
          }

    }














