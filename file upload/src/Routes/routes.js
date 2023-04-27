const express = require("express");
const multer = require('multer')
const userController = require('../Controllers/userController')
const applyModel = require("../Models/applyModel")
var fs = require('fs');
const path = require("path");
const cors = require("cors");
const router = express.Router()



router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./images")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".pdf")
        }
    })
  }).single('fileName');
  
  
  // Single File Route Handler
//   router.post("/single", upload, async (req, res) => {
//       console.log(req.file);
//       let data = new applyModel(req.body)
//       const result = await data.save()
//       res.send(result);
//     });
    
    router.post('/apply',upload, userController.apply)

    
module.exports = router 