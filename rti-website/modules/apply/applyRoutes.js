const express = require('express');
const router = express.Router();
const applyController = require('../../controllers/applyController');
//const authController = require('../../controllers/authController');

const multer = require('multer')
var fs = require('fs');
const path = require("path");
const cors = require("cors");

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



router.post('/apply',upload , applyController.apply);

// Protect all routes after this middleware
// app.use(authController.protect);

router.delete('/delete', applyController.delete);


router.route('/applys').get(applyController.getAllApplys);


router.route('/:id')
    .get(applyController.getApply)
    .patch(applyController.updateApply)


    module.exports = router  

