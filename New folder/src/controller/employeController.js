const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const employeModel = require('../model/employeModel')

//===================================create================================================
module.exports.employe =async function (req,res) {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
          return res.status(400).send({ Status: false, message: "Please provide all the details" });
        }
        let savedData = await employeModel.create(data);
        return res.status(201).send({ status: true, msg: savedData });
      } catch (error) {
        res.status(500).send({ status: false, error: error.message });
      }
    };

//======================================get=======================================================

module.exports.getEmploye =async function (req,res) {
try{
if(req.query.userId){
    if(!mongoose.isValidObjectId(req.query.userId))
    return res.status(400).send({ status: false, msg: "please enter valid userId" });
}
let employeFound = await employeModel.find(req.query)
 return res.status(200).send({ status: true, data: employeFound });

} catch (error) {
        res.status(500).send({ status: false, error: error.message });
      }

}

//=====================================update======================================================


module.exports.update =async function (req,res) {
try{
 let data = req.body
 let employeId = req.params.employeId
 if (Object.keys(data).length === 0) {
    return res.status(400).send({ Status: false, message: "NO data for update" });
  }
  if (!mongoose.isValidObjectId(employeId)) {
    return res.status(400).send({ Status: false, msg : "please enter a valid employeId" });
  }
 
let findEmploye = await employeModel.findById(employeId)
if(!findEmploye)
return res.status(404).send({message: "employeId is invalid" })


let updateEmploye = await employeModel.findOneAndUpdate({_id:employeId},{
$set:{
    Name: data.Name,
    Day: data.Day,
    projectName: data.projectName,
    description:data.description,
    remark: data.remark
}
},{new:true,upsert:true})
return res.status(200).send({Status: true, msg: updateEmploye })

}catch (error) {
        res.status(500).send({ status: false, error: error.message });
      }
}






