const db = require('../models')

const Seller = db.sellers

const addSeller = async (req, res) => {
    let data = {
        product_id: id,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        Books_Sold: req.body.Books_Sold
    }

    const review = await Seller.create(data)
    res.status(200).send(review)

}



const getAllSeller = async (req, res) => {

    const reviews = await Seller.findAll({})
    res.status(200).send({reviews:reviews})

}




const updateSeller = async (req, res) => {

    let id = req.params.id

    const product = await Seller.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}


const deleteSeller = async (req, res) => {

    let id = req.params.id
    
    await Seller.destroy({ where: { id: id }} )

    res.status(200).send('Seller is deleted !')

}










module.exports = {addSeller , getAllSeller ,updateSeller, deleteSeller  }