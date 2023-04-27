module.exports = (sequelize, DataTypes) => {

    const Seller = sequelize.define("seller", {
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
          Books_Sold: {
            type: DataTypes.BOOLEAN
        },


    })

    return Seller

}