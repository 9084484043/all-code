module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("customer", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Customer

}