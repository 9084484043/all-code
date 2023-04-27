const path = require("path");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { default: mongoose } = require('mongoose');
const model = require("./models/model")
const app = express();
app.use(cors());

var fs = require('fs');
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/fileUpload", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) ) 





const upload = multer({
  storage: multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, "./images")
      },
      filename: function (req, file, cb) {
          cb(null, file.fieldname + "-" + Date.now() + ".pdf")
      }
  })
}).single('fileName');


// Single File Route Handler
app.post("/single", upload, async (req, res) => {
  console.log(req.file);
  let data = new model(req.body)
  const result = await data.save()
  res.send(result);
});




// Route To Load Index.html page to browser
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });



app.listen(port, () => {
  console.log(`Express app listening on port ${port}...🎧🙉🙉`);
})


// let checkImage = (img) => {
//   let imageRegex = /(pdf|doc|txt)$/
//   return imageRegex.test(img)
// }




