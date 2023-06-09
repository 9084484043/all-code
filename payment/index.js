const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

var Publishable_Key = 'pk_test_51MMZoOSBCLdNT6xNoAnsJW71Kqmj72uqwuww7qjvLfxILyiGSSknfmPZZMDMYMYMbkbfYn0Ogvdp0nRbYVJ9X0rh00jGq7JJLj'
var Secret_Key = 'sk_test_51MMZoOSBCLdNT6xNKA5bVUzutVgXTFVSiemWYs6S2eKdvmuKsK05l0MMW7qgxe8hSj9MpH9NKg6Yo6K6AG21j4W900ieEHODpC'

const stripe = require('stripe')(Secret_Key)

const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('Home', {
	key: Publishable_Key
	})
})

app.post('/payment', function(req, res){

	// Moreover you can take more details from user
	// like Address, Name, etc from form
	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken,
		name: 'Bhuvnesh Sharma',
		address: {
			line1: 'TC 9/4 Old MES colony',
			postal_code: '302020',
			city: 'jaipur',
			state: 'Rajasthan',
			country: 'India',
		}
	})
	.then((customer) => {

		return stripe.charges.create({
			amount: 2500,	 // Charging Rs 25
			description: 'Web Development Product',
			currency: 'INR',
            payment_method: 'pm_card_visa',
			customer: customer.id
		});
	})
	.then((charge) => {
		res.send("Success") // If no error occurs
	})
	.catch((err) => {
		res.send(err)	 // If some error occurs
	});
})

app.listen(port, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})



