const {attendanceServices}=require('../services/attendanceService');

const attendanceReport=async(req,res)=>{
try {
  var id;
  if(req.query.id==undefined || req.query.month==undefined){
    var month='DEC';
   id=1;
  
  }else{
    id =parseInt(req.query.id);
    month=req.query.month;
    
  }
  var startInx=(id-1)*50;
  var limit=50;
  
  const rows=await attendanceServices(startInx,limit,month);  
  res.render('attendance/template1',{rows:rows, id:id ,month:month});
} catch (error) {
  console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"})
}

}
module.exports={attendanceReport};