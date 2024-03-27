const express = require('express');
const router=express.Router();

const {getLink,generatepass,checkRegister } = require('../controllers/registerControll');

router.get("/",(req,res)=>{
  res.render('index');
})

router.post("/",checkRegister)


router.get('/activelink/:link',getLink);

router.post('/activelink/:link',generatepass);



module.exports = router;