const mongoose = require('mongoose');
const validator = require('validator');

const jobSchema = new mongoose.Schema({

        title: {
            type:String,
            min : 5,
            max : 20,
            required: [true, 'Please fill the title'],
        },

        // location: {
        //     type:String,
        //     minLenght : 2,
        //     maxLenght : 12,
        //     required: [true, 'Please fill the location'],
        // },

        // salary: {
        //     type:Number,
        //     minLenght : 3,
        //     maxLenght : 7,
        //     required: [true, 'Please fill the salary'],
        // },

        // benefits: {
        //     type:String,
        //     minLenght : 50,
        //     maxLenght : 400,
        //     required: [true, 'Please fill the benefits'],
        // },

        // type: {
        //     type:String,
        //     enum: ['Part-Time', 'Full-Time', 'Contract-Basis'],
        //     required: [true, 'Please fill the type of job'],
        // },

        //description: {
          //  type:String,
        //    minLenght: 100,
         //   maxLenght: 600,
         //   required: [true, 'Please fill the description'],
        // },

        // resume: {
        //     type:String,
        //     required: [true, 'Please Attached Your Resume'],
        //     validate: {
        //         validator: function (el) {
        //             // "this" works only on attache file 
        //             return el === this.Resume;
        //         },
        //         message: 'Your Resume is Not Attached'
        //     }
        // },

});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;