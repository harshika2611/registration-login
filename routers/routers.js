const express = require('express');
const router=express.Router();
const registerRouter = require('../routers/registerRouter');
const loginRouter = require('../routers/loginRoute');
const forgotRouter = require('../routers/forgotRoute');
const logout=require("../routers/logoutRoute");
const alltask=require("../routers/alltask");
const { auth } = require('../middleware/auth');
router.use('/',registerRouter);
router.get('/api/login/home',auth,(req,res)=>{
  res.render('home');
})
router.use('/api/login',loginRouter);
router.use('/api/logout',logout);
router.use('/api/forgot',forgotRouter);
router.use('/api/tasks',alltask);

module.exports=router;