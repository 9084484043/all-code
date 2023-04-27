const express = require('express');
const router = express.Router();

const Persons = require("../models/personModel.js");


router.get('/getData', async function (req, res) {    
  let data= await Persons.getPersons()
  console.log(data)
  res.send({data:data, status:true})
});


router.post('/createData', async function (req, res) {    
    let data= await Persons.createPerson()
    console.log(data)
    res.send({data:data, status:true})
  });


module.exports = router; 