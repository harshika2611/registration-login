const data = require("../config/config");

const sortingOrderServices=async(field,orderBy,startInx)=>{
try {
 const sql=`select * from studentMaster2 order by ${field} ${orderBy} limit 200 offset ${(startInx) };` 
 const [result]=await data.execute(sql);
 return result;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}
module.exports={sortingOrderServices};