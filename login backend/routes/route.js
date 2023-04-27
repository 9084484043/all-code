const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const profileController = require("../controllers/profileController")
const middleware = require("../middleware/auth")


var fs = require('fs');
const path = require("path");
const cors = require("cors");
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


//...........................user..............................//

router.post("/creatUser", userController.createUser)

router.post("/login", userController.login)

router.get("/getUser", userController.getUser)
// router.get("/getUser",middleware.tokenChecker, userController.getUser)





//...........................userProfile...............................//

router.post("/createProfile",middleware.tokenChecker, profileController.createProfile)

 router.get("/getProfile",middleware.tokenChecker, profileController.getProfile)

router.put("/update/:userId",middleware.tokenChecker, profileController.update) 
  

module.exports = router;  
