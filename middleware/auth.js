const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {SECRET_KEY}=process.env;
const auth=(req,res,next)=>{
console.log(req.headers.cookie.split('=')[1],"aaaaaaaaaaaaaaaaaaaaa");
  const token=req.headers.cookie.split('=')[1];
if(!token){
  return res.sendStatus(403);
}
try {
  const data=jwt.verify(token,SECRET_KEY);
  return next();
} catch (error) {
  return res.sendStatus(403);
}
}
module.exports={auth};