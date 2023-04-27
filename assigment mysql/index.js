const express = require("express");
const app = express();
require("./db")
const router = require('./routes/route')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {

  res.send("error in api") 
});



app.use('/', router)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Express app listening on port ${process.env.PORT || 3000}`);
}) 