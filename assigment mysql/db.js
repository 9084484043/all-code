const {Sequelize, DataTypes} = require('sequelize')
// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'bhuvi',
    'root',
    '12345', {
  
        // Explicitly specifying 
        // mysql database
        dialect: 'mysql',
        //  logging:false,  // message not show   
        host: 'localhost'
    }
);


sequelize.authenticate()
.then(()=>{
    console.log('Connection has been established successfully.');
})
. catch ((error) =>{
console.error('Unable to connect to the database:', error);
})
  

const db = {}
db.sequelize = Sequelize
db.sequelize = sequelize

db.book = require("./Models/bookModel")(sequelize,DataTypes);
db.customer = require("./Models/customersModel")(sequelize,DataTypes);
db.seller = require("./Models/sellersModel")(sequelize,DataTypes);





db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = sequelize
module.exports = db
