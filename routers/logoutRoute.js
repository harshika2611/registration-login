const express = require('express');
const router=express.Router();
const { auth } = require('../middleware/auth');



router.get('/',auth,(req,res)=>{
  const token=req.headers.cookie.split('=')[1];
  return res.clearCookie("token")
  .status(200)
  .redirect(`${process.env.URL}/api/login`);
})





module.exports = router;