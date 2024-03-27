const express = require('express');
const router=express.Router();
const { auth } = require('../middleware/auth');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


router.get('/',auth,(req,res)=>{
  const token=req.headers.cookie.split('=')[1];
  return res.clearCookie("token")
  .status(200)
  .redirect('http://localhost:8050/api/login');
})





module.exports = router;