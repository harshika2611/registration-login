const express = require('express');
const router=express.Router();
const registerRouter = require('../routers/registerRouter');
const loginRouter = require('../routers/loginRoute');
const forgotRouter = require('../routers/forgotRoute');
const logout=require("../routers/logoutRoute");
const alltask=require("../routers/alltask");
router.use('/user',registerRouter);
router.use('/login',loginRouter);
router.use('/logout',logout);
router.use('/forgot',forgotRouter);
router.use('/tasks',alltask);

module.exports=router;