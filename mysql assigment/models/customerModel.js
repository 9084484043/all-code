module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("customer", {
        rating: {
            type: DataTypes.INTEGER
        },
        purchased: {
            type: DataTypes.BOOLEAN
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Customer

}