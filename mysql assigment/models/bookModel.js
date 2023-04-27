
module.exports =  (sequelize, DataTypes)=>{

    const Book = sequelize.define("book", {
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        release_date: {
          type: DataTypes.DATEONLY,
        }
       
     });
    
     return Book
    }