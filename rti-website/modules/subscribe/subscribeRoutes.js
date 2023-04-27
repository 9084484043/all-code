const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const subscribeController = require('../../controllers/subscribeController')

app.post('/subscribe', subscribeController.subscribe);

// Protect all routes after this middleware
// app.use(authController.protect);

app.delete('/delete',authController.protect, subscribeController.delete);

// Only admin have permission to access for the below APIs 
// app.use(authController.restrictTo('admin'));

app.route('/subscribes').get(subscribeController.getAllSubscribes);


    app.route('/:id')
    .get(subscribeController.getSubscribe)
    .patch(subscribeController.updateSubscribe)
    .delete(subscribeController.deleteSubscribe);
