// const express = require('express');
// const router = express.Router();
const jobController = require('../../controllers/jobController');
const authController = require('../../controllers/authController');


// Protect all routes after this middleware
// app.use(authController.protect);
app.post('/createJob',authController.protect, jobController.createJob);
app.delete('/delete', authController.protect,jobController.delete);

// Only admin have permission to access for the below APIs 
// app.use(authController.restrictTo('admin'));



app.route('/jobs').get(jobController.getAllJobs);


    app.route('/:id')
    .get(jobController.getJob)
    .patch(authController.protect,jobController.updateJob)
    .delete(authController.protect,jobController.deleteJob);
