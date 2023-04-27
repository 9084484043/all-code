const db = require('../models')


const Customer = db.customers


const addCustomer = async (req, res) => {

    const id = req.params.id 

    let data = {
        book_id: id,
        rating: req.body.rating,
        purchased: req.body.purchased,
        description: req.body.description
    }

    const review = await Customer.create(data)
    res.status(200).send(review)

}



const getAllCustomer = async (req, res) => {

   
    const reviews = await Customer.findAll({})
    if(reviews.purchased === true){ 
    res.status(200).send({reviews:reviews})
    }
}
 


const updateCustomer = async (req, res) => {

    let id = req.params.id

    const product = await Customer.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}
 

const deleteCustomer = async (req, res) => {

    let id = req.params.id
    
    await Customer.destroy({ where: { id: id }} )

    res.status(200).send('Customer is deleted !')

}






module.exports = {
    addCustomer,
    getAllCustomer,
    updateCustomer,
    deleteCustomer
}