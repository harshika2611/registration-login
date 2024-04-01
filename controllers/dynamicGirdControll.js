const {searchQueryServices,dynamicPaginationService}=require('../services/dynamicGirdService');

const searchQuery=async(req,res)=>{
try {
  var id=req.query.id||1 ;
 let page=15;
  let limit=20;
  let startInx=(id-1)*20;
  const dataQ=req.body.query;
  const rows=await searchQueryServices(dataQ,startInx,limit);

  res.render('dynamicGrid/template1', { rows: rows, id: id, dataQ:dataQ,limit:limit})
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"}); 
}
}

const dynamicPagination=async(req,res)=>{
try {
  var id=req.query.id || 1 ;
  
  let startInx=(id-1)*20;
  const dataQ =req.query.dataQ;
  const limit=req.query.limit;
  const rows=await dynamicPaginationService(dataQ,startInx,limit)
 
  res.render('dynamicGrid/template1', { rows: rows,id:id,dataQ:dataQ,limit:limit})
}catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});  
}
}

module.exports={searchQuery,dynamicPagination};