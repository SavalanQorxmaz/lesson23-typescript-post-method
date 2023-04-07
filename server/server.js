const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// const { url } = require("inspector");
// const { urlencoded } = require("express");
const port = 4000


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))


// fetch("db.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

// app.get("/", (req, res) => {

//     console.log(req)
  
// })

app.post('/login',(req,res)=>{
  res.send("data geldi")
})







app.listen(port)