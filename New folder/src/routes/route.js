const express = require("express")
const router = express.Router()
const userController =require("../controller/userController")
const employeController = require("../controller/employeController")
const ratingController = require("../controller/ratingController")
const middleware = require("../middleware/auth")
const bcriptController = require("../controller/bcriptController")

router.post('/createUser',userController.createUser)
router.post('/login',userController.login)


router.post('/employe',middleware.tokenChecker,employeController.employe)
router.get('/getEmploye',middleware.tokenChecker,employeController.getEmploye)
router.put('/update/:employeId',employeController.update)

router.post('/addRating/:userId',middleware.tokenChecker, ratingController.addRating)


router.post('/createbcript', bcriptController.createbcript)
router.post('/loginbcript', bcriptController.loginbcript)
router.get('/getUserDetails',bcriptController.getUserDetails)

module.exports = router 