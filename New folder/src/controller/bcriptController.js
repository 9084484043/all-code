const bcriptModel = require("../model/bcriptModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const saltRounds = 10;

module.exports.createbcript = async (req, res) => {
    try {
        let data = req.body;;

        
        let { email, password } = data;
        //DB calls for phone and email

        let emailCheck = await bcriptModel.findOne({ email: email });
        if (emailCheck) return res.status(400).send({ status: false, message: "email already exist" });

        //passowrd bcrypt
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);

        let obj = {
           
            email,
            password: hashPassword,
        };
        let result = await bcriptModel.create(obj);
        return res.status(201).send({ status: true, message: 'Success', data: result });
    } catch (e) {
        console.log(e.message);
       return res.status(500).send({ status: false, message: e.message });
    }
};






module.exports.loginbcript = async function (req, res) {
    try {
        let data = req.body;
        let { email, password } = data;
        let getUser = await bcriptModel.findOne({ email });
        if (!getUser) return res.status(404).send({ status: false, msg: "User not found or Email Id is invalid" });

        let matchPassword = await bcrypt.compare(password, getUser.password);
        if (!matchPassword) return res.status(401).send({ status: false, msg: "Password is incorrect." });

        //To create token
        let token = jwt.sign(
            {
                bcriptId: getUser._id,
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            }, "UrAnIuM#GrOuP@19")

        return res.status(200).send({ status: true, message: "Success", data: { bcriptId: getUser._id, token: token }, });

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ status: false, message: "Error", error: err.message });
    }
};



module.exports.getUserDetails = async function (req, res) {
        try{
        if(req.query.bcriptId){
            if(!mongoose.isValidObjectId(req.query.bcriptId))
            return res.status(400).send({ status: false, msg: "please enter valid userId" });
        }
        let bcriptFound = await bcriptModel.find(req.query)
         return res.status(200).send({ status: true, data: bcriptFound });
        
        } catch (error) {
                res.status(500).send({ status: false, error: error.message });
              }
        
        
  };  


