const {forgotServices}=require('../services/forgotServices')

const forgotPass=async(req,res)=>{
 try {
  // console.log(req.body);  
   const result=await forgotServices(req.body);
  //  console.log(result);
   if(result>0){
   if(req.body.new_pass==req.body.confirm_pass){
     res.redirect('http://localhost:8050/api/login');
   
   }else{
    const error_forgot="Password not matched"
    res.render('forgot',{error_forgot});
   }
   }else{
    const error_forgot="Invalid email or password"
    res.render("forgot",{error_forgot});
   }
 } catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"})
 }
}

module.exports={forgotPass};