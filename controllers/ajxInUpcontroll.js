const {insertDataServices}=require('../services/ajxInUpServices');

const insertData=async(req,res)=>{
  try {
    console.log(req.body);
    // const fname = req.body.fname;
    // const lname = req.body.lname;
    // const designation = req.body.designation;
    // const add1 = req.body.add1;
    // const email = req.body.email;
    // const add2 = req.body.add2;
    // const number = req.body.number;
    // const city = req.body.city;
    // const state = req.body.state;
    // const gd = req.body.gd;
    // const zip = req.body.zip;
    // const status = req.body.status;
    // const dob = req.body.dob;
    // const technologi1 = req.body.technologi1;
    // const tech_skill1 = req.body.tech_skill1;
   const ans=await insertDataServices(req.body);
   console.log(ans,"ans here");
   res.send("inserted")
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
  }
}
module.exports={insertData}