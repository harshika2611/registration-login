const {registerService,generatePassService,expireService,checkRegiService}=require("../services/registerService");


const checkRegister=async(req,res)=>{
  try { 
    const otp=Math.floor((Math.random()*1000000000000)+1);
    const checkuser=await checkRegiService(req.body);
    console.log(checkuser.length);
    const msg="already registered";
    if(checkuser.length>0){
      res.render("index",{msg:msg});
    }else{
      try{
        console.log(req.body,"body of register");
        const otp=Math.floor((Math.random()*1000000000000)+1);
        const user=await registerService(req.body,otp);
        const id=user;
        res.render("active",{otp:otp,id:id});
      }catch(error){
        console.error("error", error);
        res.status(500).json({message:"can`t fetch user controller"})
      }
    }
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"})
  }
}


const getLink=async(req,res)=>{
  try {
    const link=req.params;
     const timer=await expireService(link);
     const expeireTimer=new Date(new Date(timer).getTime()+5*60000).toTimeString();
     console.log(expeireTimer);
     const newtime=new Date().toTimeString();
    console.log(newtime);
    if(newtime<expeireTimer){
      res.render('createpass'); 
    }else{
      res.send('expired');
    }
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"});
  }
 
}
const generatepass=async(req,res)=>{
  try {
    console.log(req.body);
    const sault=Math.floor((Math.random()*10000)+1);
    const link=req.params;
    const ans=await generatePassService(req.body,sault,link);
   if(req.body.create_pass!=req.body.repeat_pass){
    const error="Password not Matched";
     res.render("createpass",{error});
   }else{
     res.redirect("/api/login");
   }
  } catch (error) {
     console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"});
  }

}


module.exports = {getLink,generatepass,checkRegister};