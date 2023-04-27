module.exports = (sequelize, DataTypes) => {

    const Seller = sequelize.define("seller", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Seller

}