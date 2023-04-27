const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;
const database = process.env.DATABASE;

module.exports = {
    connectToDb :()=>{ mongoose.connect(`mongodb+srv://suresh1529:sureshee1529@cluster0.ujuzkey.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('DB connection Successfully!');
    return con;
})
    }
}
