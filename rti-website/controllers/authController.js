// const {
//     promisify
// } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
// const AppError = require('../utils/appError').default;



const createToken = id => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

exports.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;

        // 1) check if email and password exist
        if (!email || !password) {
            return res.status(401).send({
                status: 'fail',
                message: 'Please provide email or password',
            })
            // AppError(404, 'fail', 'Please provide email or password'), req, res, next);
        }

        // 2) check if user exist and password is correct
        const user = await User.findOne({
            email
        }).select('+password');

        if (!user || !await user.correctPassword(password, user.password)) {
            return res.status(401).send({
                status: 'Fail',
                message: "Email or Password is wrong"
            })
            //  next(new AppError(401, 'fail', 'Email or Password is wrong'), req, res, next);
        }

        // 3) All correct, send jwt to client
        const token = createToken(user.id);

        // Remove the password from the output 
        user.password = undefined;

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user
            },
            message: 'Login successful'
        });

    } catch (err) {
        next(err);
    }
};

exports.signup = async (req, res, next) => {
    try {
        const{email}=req.body;
        // check if email is already exist
        const mailId = await User.findOne({
            email
        });
        console.log('mailId',mailId)
        if(mailId) {
            return res.status(401).send({
                status: 'fail',
                message: 'This email already exist',
            });
        };
        console.log('req.body', req.body);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            //role: req.body.role,
        });
        

        const token = createToken(user.id);

        user.password = undefined;

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user
            },
            message: 'Signup successful'
        });

    } catch (err) {
        console.log("signup error", err)
        next(err);
    }

};

exports.protect = async (req, res, next) => {
    try {
        console.log('req', req.headers)
        // 1) check if the token is there
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401).send({
                status: 'Fail',
                message: "You are not logged in! Please login in to continue"
            })
            // new AppError(401, 'fail', 'You are not logged in! Please login in to continue'), req, res, next);
        }


        // 2) Verify token 
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode, "decode")
        // 3) check if the user is exist (not deleted)
        const user = await User.findById(decode.id);
        console.log('user', user);
        if (!user) {
            return res.status(401).send({
                status: 'Fail',
                message: "This user is no longer exist"
            })
            // return next(new AppError(401, 'fail', 'This user is no longer exist'), req, res, next);
        }

        req.user = user; //use.role === 'admin'
        next();

    } catch (err) {
        console.log('err', err)
        next(err);
    }
};

// Authorization check if the user have rights to do this action
exports.restrictTo = (...roles) => {
    console.log('roles', roles)
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            // return next(new AppError(403, 'fail', 'You are not allowed to do this action'), req, res, next);
        }
        next();
    };
};