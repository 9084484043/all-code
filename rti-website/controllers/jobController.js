const Job = require('../models/jobModel');
const base = require('./baseController');
const jwt = require('jsonwebtoken');

// const createToken = id => {
//     return jwt.job({
//         id
//     }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     });
// };


exports.delete = async (req, res, next) => {
    try {
        await Job.findByIdAndUpdate(req.job.id, {
            active: false
        });

        res.status(204).json({
            status: 'success',
            data: null
        });


    } catch (error) {
        next(error);
    }
};

exports.createJob = async (req, res, next) =>{
    try {
        console.log('req.body', req.body);
        const job = await Job.create({
            title : req.body.title,
            location : req.body.location,
            salary : req.body.salary,
            benefits  : req.body.benefits,
            type : req.body.type,
            description : req.body.description,
           

        });

       // const token = createToken(job.id);
        
        res.status(200).json({
            status: 'success',
          //  token,
            data: {
                job
            }
        });


    }catch (error) {
        next(error)
    }
};

exports.getAllJobs = base.getAll(Job);
exports.getJob = base.getOne(Job);


exports.updateJob = base.updateOne(Job);
exports.deleteJob = base.deleteOne(Job);