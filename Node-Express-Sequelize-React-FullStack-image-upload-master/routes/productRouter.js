// import controllers review, products, user
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')
const loginController = require('../controllers/userController')
const middleware = require("../middleware/auth")

// router
const router = require('express').Router()


// use routers
// 

router.post('/createUser', loginController.createUser)

router.post('/login', loginController.login)

router.post('/addProduct', productController.upload , productController.addProduct)

// middleware.tokenChecker,
router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)
router.post('/getReviews', reviewController.getReviews)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)




// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router