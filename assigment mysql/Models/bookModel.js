
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
    release_date: {
      type: DataTypes.DATEONLY,
    },
    subject: {
      type: DataTypes.INTEGER,
    } 
 });

 return Book
}
 
