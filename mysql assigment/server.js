const express = require('express')
const router = require('./routes/productRouter.js')
const app = express()
require('./models')


app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/', router)



const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})