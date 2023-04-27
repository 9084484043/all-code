const Subscribe = require('../models/subscribeModel');
const base = require('./baseController');
const jwt = require('jsonwebtoken');

// const createToken = id => {
//     return jwt.subscribe({
//         id
//     }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     });
// };

exports.delete = async (req, res, next) => {
    try {
        await Subscribe.findByIdAndUpdate(req.subscribe.id, {
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

exports.subscribe = async (req, res, next) => {
    try {
        
        const{email}=req.body;
        // check if email is already exist
        const mailId = await Subscribe.findOne({
            email
        });
        console.log('mailId',mailId)
        if(mailId) {
            return res.status(401).send({
                status: 'fail',
                message: 'You are already subscribed from this email',
            });
        };

        console.log('subscribe req.body', req.body);
        const subscribe = await Subscribe.create({
            name: req.body.name,
            email: req.body.email,
        });

        // check if email is already exist
        // const mail = await Subscribe.findOne({
        //     email
        // })
        // if(mail) {
        //     return res.status(401).send({
        //         status: 'fail',
        //         message: 'This email already exist',
        //     });
        // };
        

       // const token = createToken(subscribe.id);

        res.status(201).json({
            status: 'success',
            //token,
            data: {
                subscribe
            },
            message: 'Subscribe successful'
        });

    } catch (err) {
        console.log("subscribe error", err)
        next(err);
    }

};

exports.getAllSubscribes = base.getAll(Subscribe);
exports.getSubscribe = base.getOne(Subscribe);


exports.updateSubscribe = base.updateOne(Subscribe);
exports.deleteSubscribe = base.deleteOne(Subscribe);