const {examSevices,searchDataServices,searchFieldServices,searchPaginationServices,detailStudentServices}=require("../services/examServices");

const examcontroll=async(req,res)=>{
try {
  if(req.query.id==undefined){
    var id=1;
  }else{
    id=parseInt(req.query.id);
  }
  var get='search';
  let startInx=(id-1)*50;
  let limit=50;
const rows=await examSevices(startInx,limit);

res.render('examReport/template1',{rows:rows,id:id,get:get});
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
}
}

const searchData=async(req,res)=>{
  try {

  if(req.query.id==undefined){
    var id=1;   
  }else{
    id=parseInt(req.query.id);
  }
  const sid=req.body.sid;

    const rows= await searchDataServices(sid);
    console.log(rows);
    
res.render('examReport/template1',{rows:rows,id:id})
  } catch (error) {
     console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
  }
}

const searchField=async(req,res)=>{
try {
  var post="search";
  var id=req.query.id || 1;
   const search=req.body.search;
   const firstName=req.body.firstName;
   const lastName=req.body.lastName ;

 const inputtext=[];
 inputtext.push(req.body.search);
 inputtext.push(req.body.firstName);
 inputtext.push(req.body.lastName);
  const rows=await searchFieldServices(search,firstName,lastName);
  res.render('examReport/template1',{rows:rows,id:id,firstName:firstName,search:search,lastName:lastName,inputtext:inputtext,post:post})
} catch (error) {
   console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
}
}

const searchPagination=async(req,res)=>{
try {
  var id=req.query.id||1 ;
 const inputtext= req.query.inputtext.split(',');

let startInx=(id-1)*50;
let limit=50;
  const search=req.query.search;
  const firstName=req.query.firstName;
  const lastName=req.query.lastName ;
  const rows=await searchPaginationServices(inputtext,startInx,limit);
  res.render('examReport/template1',{rows:rows,id:id,firstName:firstName,search:search,lastName:lastName,inputtext:inputtext})
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
}
}


const detailStudent=async(req,res)=>{
  try {
    const id=req.params.id;
    const rows=await detailStudentServices(id);
    res.render('examReport/template2',{rows:rows})
  } catch (error) {
    console.error("error", error);
    res.status(500).json({message:"can`t fetch user controller"}); 
  }
}

module.exports={examcontroll,searchData,searchField,searchPagination,detailStudent};