
const jwt = require("jsonwebtoken");
const {SECRET_KEY}=process.env;


const auth=(req,res,next)=>{
const token=req.headers.cookie.split('=')[1];
  
if(!token){
  return res.sendStatus(403);
}
else{
  try {
    const data=jwt.verify(token,SECRET_KEY);
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
}
}
module.exports={auth};