const express = require('express');
const router=express.Router();
const registerRouter = require('../routers/registerRouter');
const loginRouter = require('../routers/loginRoute');
const forgotRouter = require('../routers/forgotRoute');


router.use('/user',registerRouter);
router.use('/login',loginRouter);

router.use('/forgot',forgotRouter);

module.exports=router;