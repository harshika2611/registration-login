var express = require('express');
var app = express();
require("dotenv").config();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
const register=require('./routers/routers')
const {PORT,SECRET_KEY}=process.env;

app.use("/api",register);

app.listen(PORT,()=>{
  console.log(`port running ${PORT}`);
});
module.exports={PORT,SECRET_KEY};