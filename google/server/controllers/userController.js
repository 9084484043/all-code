const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.createUser = async function (req, res) {
  try {
    let data = req.body;
    let { name, email, phone, password, cpassword } = data;

    if (Object.keys(data).length === 0) {
      return res
        .status(420)
        .send({ Status: false, message: "Please provide all the details" });
    }
    if (!name || !email || !phone || !password || !cpassword) {
      return res.status(420).send({ message: "Please provide detail" });
    }
    if (email) {
      let checkemail = await UserModel.findOne({ email: email });

      if (checkemail) {
        return res
          .status(420)
          .send({
            Status: false,
            message: "Please provide user email, this email has been used ",
          });
      }
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashcpassword = await bcrypt.hash(cpassword, salt);

    let obj = {
      name,
      email,
      phone,
      password: hashPassword,
      cpassword: hashcpassword,
    };

    if (password === cpassword) {
      let savedData = await UserModel.create(obj);

      return res.status(201).send({ status: true, msg: savedData });
    } else {
      return res
        .status(420)
        .send({ Status: false, message: "somthing went wrong " });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};

module.exports.login = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || email === "")
      return res
        .status(400)
        .send({
          Status: false,
          message: "You have to provide email to login ",
        });

    if (!password || password === "")
      return res
        .status(400)
        .send({
          Status: false,
          message: "You have to provide password to login",
        });

    let user = await UserModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .send({ status: false, msg: "User not found or Email Id is invalid" });

    let matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword)
      return res
        .status(401)
        .send({ status: false, msg: "Password is incorrect." });

    const token = await user.generateAuthToken();
    res.cookie("jwtoken", token, {
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      httpOnly: true,
    });
    await user.save();
    res
      .status(200)
      .send({ status: true, msg: "User login successful", token: token });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};



module.exports.createContact = async function (req, res) {
  try {
    let data = req.body;
    let { name, email, phone, message } = data;

    if (!name || !email || !phone || !message) {
      return res.status(420).send({ message: "Please provide detail" });
    }
    let userContact = await UserModel.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();
      res.status(200).send({ msg: "User contact successful" });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
