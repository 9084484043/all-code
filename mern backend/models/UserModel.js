const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: { 
      type: Number,
      required: true,
  },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    } ,
    date: {
        type: Date,
        default: Date.now,
    } ,
messages:[
{
  name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
phone: { 
  type: Number,
  required: true,
},
message: { 
  type: String,
  required: true,
},
}
],
     tokens: [ 
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
}, { timestamps: true });


UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.SECRET_KEY
    );

    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};



UserSchema.methods.addMessage = async function (name,email,phone,message) {
  try {
   
    this.messages = this.messages.concat({ name,email,phone,message });
    await this.save();
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};


module.exports = mongoose.model('User', UserSchema) 