const express = require('express');
const router = express.Router();

const hiringController =  require('../../controllers/hiringController');


router.post("/hiringUser", hiringController.hiringUser)


module.exports = router;