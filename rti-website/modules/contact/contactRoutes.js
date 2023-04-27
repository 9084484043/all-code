const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/contactController');
const authController = require('../../controllers/authController');

app.post('/contact',  contactController.contact);

// Protect all routes after this middleware
// app.use(authController.protect);

app.delete('/delete', contactController.delete);


app.route('/contacts').get(contactController.getAllContacts);


    app.route('/:id')
    .get(contactController.getContact)
    .patch(contactController.updateContact)