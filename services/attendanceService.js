const data = require("../config/config");

const attendanceServices=async(startInx,limit,month)=>{
try {
  const sql=`select studentMaster1.studentId, firstName, count(studentMaster1.studentId) as Days_P  from studentMaster1
  inner join Attendance1 on studentMaster1.studentId=Attendance1.studentId where Month='${month}' and Attendance='P' group by studentMaster1.studentId limit ${startInx},${limit};`
const [result]=await data.execute(sql);

return result;
} catch (error) {
  console.log(`Error`, error)
    throw error;
}
}
module.exports={attendanceServices};