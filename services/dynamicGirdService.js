const data = require("../config/config");
const searchQueryServices=async(dataQ,startInx,limit)=>{
 try {
 
  const sql=`${dataQ} limit ${startInx},${limit}`;
 const [result]=await data.execute(sql);

  return result;
 } catch (error) {
  console.log(`Error`, error)
  throw error;
 } 
}

const dynamicPaginationService=async(dataQ,startInx,limit)=>{
  try {

    const sql1=`${dataQ} limit ${startInx},${limit}`
    
  const [result1]=await data.execute(sql1);
 
  return result1;
  } catch (error) {
    console.log(`Error`, error)
  throw error;
  }
}


module.exports={searchQueryServices,dynamicPaginationService}