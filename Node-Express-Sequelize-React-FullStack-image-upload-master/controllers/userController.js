const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = db.users;


module.exports.createUser = async (req, res) => {
  try {
    let data = req.body
    const { fullName, email, password } = data;
  
    if (Object.keys(data).length === 0) {
      return res.status(400).send({ Status: false, message: "Please provide all the details" })
  }
    if (!fullName || !email ||  !password) {
      return res.status(420).send({ message: "Please provide detail" });
    }
    if (email) {
      const alreadyExistsUser = await User.findOne({ where: { email } })

      if (alreadyExistsUser) {
        return res.status(409).send({ message: "User with email already exists!" });
      }
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const obj = { fullName, email, password : hashPassword };
    let savedData = await User.create(obj);

    return res.status(201).send({ status: true, msg: savedData });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
  };






  module.exports.login = async function (req, res) {
    try {
      let email = req.body.email; 
      let password = req.body.password;
  
      if (!email ||  !password) {
        return res.status(420).send({ message: "Please provide detail" });
      }
      let user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).send({ status: false, msg: "User not found or Email Id is invalid" });
  
      let matchPassword = await bcrypt.compare(password, user.password);
      if (!matchPassword) return res.status(401).send({ status: false, msg: "Password is incorrect." });
  
      let token = jwt.sign(
        {
          userId: user._id
        },
        "processmySECRET_KEY"
      );
  
      res.setHeader("x-api-key", token);
      res.status(200).send({ status: true, msg: "User login successful", token: token });
  
    }
    catch (error) {
      res.status(500).send({ status: false, error: error.message })
    }
  }
  

