const hiringModel = require("../models/hiringFromUsModel")




module.exports.hiringUser = async function (req, res) {
    try {
        let data = req.body
        const mobileNumber = data
        if (Object.keys(data).length === 0) {
            return res.status(400).send({ Status: false, message: "Please provide all the details" })
        }
        let savedData = await hiringModel.create(data)
        return res.status(201).send({ status : true, msg: savedData })   
  }
  catch (error) {
    res.status(500).send({ status: false, error: error.message })
  }
}

