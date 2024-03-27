const express = require('express');
const router=express.Router();

const {userLogin}=require("../controllers/loginControll");


router.get("/",(req,res)=>{

  res.render('login');  
})


router.post('/',userLogin);


module.exports = router;