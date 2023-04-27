const db = require('../models')

// model
const Review = db.reviews

// functions

//1. Add Review

const addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.status(200).send(review)

}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews)

}


const getReviews =  async (req, res) => {

    // const id = req.params.id

    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}




module.exports = {
    addReview,
    getAllReviews,
    getReviews
}