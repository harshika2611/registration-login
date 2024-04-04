const {insertDataServices,fetchDataServices,updateDataServices,detailUpdateServices}=require('../services/ajxInUpServices');

const insertData=async(req,res)=>{
  try {
  
   const ans=await insertDataServices(req.body);

   res.send("inserted")
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
  }
}

const fetchData=async(req,res)=>{
try {
  const id = req.params.id;
  const ans=await fetchDataServices(id);
  res.json({ basicdata: ans.basicdata, edudata: ans.edudata, work: ans.work, lang: ans.lang, tech: ans.tech, referance: ans.referance, preferance: ans.preferance })
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
}
}

const updateData=async(req,res)=>{
try {
  
  const id= req.params.id;

  const ans=await updateDataServices(req.body,id);
 
 
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
}
}

const detailUpdate=async(req,res)=>{
try {
  const rows=await detailUpdateServices();
  res.render('AjxInUp/template2',{rows:rows})
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}) 
}
}
module.exports={insertData,fetchData,updateData,detailUpdate}