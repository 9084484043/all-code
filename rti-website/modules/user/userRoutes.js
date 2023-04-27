const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const authController = require('../../controllers/authController');

app.get('/chat');
app.get('/',(req,res)=>{
    res.send({
        // status:'Success',
        message:'Welcome'
    })
})
app.post('/login', authController.login);
app.post('/signup', authController.signup);

// Protect all routes after this middleware
// app.use(authController.protect);

app.delete('/deleteMe',authController.protect, userController.deleteMe);

// Only admin have permission to access for the below APIs 
// app.use(authController.restrictTo('admin'));

app.route('/users').get(authController.protect,userController.getAllUsers);


    app.route('/:id')
    .get(authController.protect,userController.getUser)
    .patch(authController.protect,userController.updateUser)
    .delete(authController.protect,userController.deleteUser);
