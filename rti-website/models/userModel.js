const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill your name']
    },
    email: {
        type: String,
        required: [true, 'Please fill your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, ' Please provide a valid email']
    },
    mobileNumber: {
        type: Number,
        required: [true, 'Please fill your mobile number'],
        min: 10,
    },
    password: {
        type: String,
        required: [true, 'Please fill your password'],
        min: 6,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please fill your confirm password '],
        select: false,
        validate: {
            validator: function (el) {
                // "this" works only on create and save 
                return el === this.password;
            },
            message: 'Your password and confirmation password are not the same'
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

// encrypt the password using 'bcryptjs'
// Mongoose -> Document Middleware
userSchema.pre('save', async function (next) {
    // check the password if it is modified
    if (!this.isModified('password')) {
        return next();
    }

    // Hashing the password
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

// This is Instance Method that is gonna be available on all documents in a certain collection
userSchema.methods.correctPassword = async function (typedPassword, originalPassword) {
    return await bcrypt.compare(typedPassword, originalPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;