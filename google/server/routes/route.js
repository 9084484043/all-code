const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const UserModel = require("../models/UserModel")
const middleware = require("../middleware/auth")



const cors = require("cors");
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

 
//...........................user..............................//

router.post("/creatUser", userController.createUser)

router.post("/login", userController.login)


router.get('/about', middleware.tokenChecker, (req, res) => {
          res.send(req.rootUser)
  })
router.get('/getcontact', middleware.tokenChecker, (req, res) => {

          res.send(req.rootUser)
  })



router.post('/contact', middleware.tokenChecker,userController.createContact)
 
  
router.get('/logout',  (req, res) => {
res.clearCookie('jwtoken' ,{path: "/"})
  res.status(200).send("User logout")
}) 



module.exports = router;  
 