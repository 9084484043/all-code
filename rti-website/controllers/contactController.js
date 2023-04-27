const Contact = require('../models/contactModel');
const base = require('./baseController')

exports.delete = async (req, res, next) => {
    try {
        await Contact.findByIdAndUpdate(req.contact.id, {
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

exports.contact = async (req, res, next) => {
    try {
      
        console.log('contact req.body', req.body);
        const contact = await Contact.create({
            name : req.body.name,
            email : req.body.email,
            mobileNumber : req.body.mobileNumber,
            message : req.body.message,
        });

        res.status(200).send({
            status  : 'success',
            data : {
                contact
            },
            message : 'Our team will connect with you soon.'
        });
    } catch (error) {
        next(error);
    }

};

exports.getAllContacts = base.getAll(Contact);
exports.getContact = base.getOne(Contact);


exports.updateContact = base.updateOne(Contact);
exports.deleteContact = base.deleteOne(Contact);