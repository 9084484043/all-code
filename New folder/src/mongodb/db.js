const mongoose = require('mongoose')
mongoose.connect(process.env.Url)
.then(()=>console.log('MongoDb is connected'))
.catch((err)=> console.log(err))