const {insertDataServices,fetchDataServices,updateDataServices}=require('../services/ajxInUpServices');

const insertData=async(req,res)=>{
  try {
    console.log(req.body);
   const ans=await insertDataServices(req.body);
   console.log(ans,"ans here");
   res.send("inserted")
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
  }
}

const fetchData=async(req,res)=>{
try {
  const id = req.params.id;
  console.log(id,"id gives");
  const ans=await fetchDataServices(id);
  res.json({ basicdata: ans.basicdata, edudata: ans.edudata, work: ans.work, lang: ans.lang, tech: ans.tech, referance: ans.referance, preferance: ans.preferance })
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
}
}

const updateData=async(req,res)=>{
try {
  console.log(req.body);
  const id= req.params.id;
  console.log(id,"gives");
  const ans=await updateDataServices(req.body,id);
  console.log(ans);
 
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
}
}
module.exports={insertData,fetchData,updateData}