const express = require('express');
const router=express.Router();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userLogin}=require("../controllers/loginControll");
const { auth } = require('../middleware/auth');

router.get("/",(req,res)=>{

  res.render('login');  
})


router.post('/',userLogin);

router.get('/logOut',auth,(req,res)=>{
  const token=req.headers.cookie.split('=')[1];
  console.log(token);

  return res
  .clearCookie("token")
  .status(200)
  .json({message:"loged out"})
})

module.exports = router;