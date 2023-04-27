
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'bhuvi',
    'root',
    '12345', {
  
        dialect: 'mysql',
        logging:false,  // message not show   
        host: 'localhost'
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require('./bookModel')(sequelize, DataTypes)
db.customers = require('./customerModel')(sequelize, DataTypes)
db.sellers = require('./sellerModel')(sequelize, DataTypes)


db.sequelize.sync({ force:false })
.then(() => {
    console.log('yes re-sync done!')
})



//1 to Many Relation

// db.books.hasMany(db.customers, {
//     foreignKey: 'book_id',
//     as: 'customer'
// })

// db.customers.belongsTo(db.books, {
//     foreignKey: 'book_id',
//     as: 'book'
// })


 


module.exports = db
