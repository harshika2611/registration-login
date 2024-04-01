
const jwt = require("jsonwebtoken");
const {SECRET_KEY}=process.env;


const auth=(req,res,next)=>{

const token=req.headers.cookie?.split('=')[1]; 

if(!token){
  return res.status(403).json({message:"forbidden Login required"});
}
else{
  try {
    const data=jwt.verify(token,SECRET_KEY);
    return next();
  } catch (error) {
    return res.status(403).json({message:"forbidden Login required"});
  }
}
}
module.exports={auth};