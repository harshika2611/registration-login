const {sortingOrderServices}=require('../services/sortingOrederServices');

const sortingByOrder=async(req,res)=>{
try {
  const id = req.query.id || 1;

  const orderBy = req.query.orderBy || "asc";
  const field = req.query.field || "studentId";
  
  let startInx=(id-1)*200;
  const rows=await sortingOrderServices(field,orderBy,startInx)
  res.render('sorting/template1',{rows:rows, id:id, orderBy:orderBy, field:field})
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"})
}
}
module.exports={sortingByOrder};