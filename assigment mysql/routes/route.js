const express = require('express')
const router = express.Router()
const bookController = require("../Controller/bookController")

router.post("/addBook", bookController.addBook);

module.exports = router