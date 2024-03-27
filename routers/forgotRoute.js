const express = require('express');
const router=express.Router();
const {forgotPass}=require('../controllers/forgotcontroll');

router.get('/',(req, res) => {
  res.render('forgot');
})

router.post('/',forgotPass);

module.exports = router;