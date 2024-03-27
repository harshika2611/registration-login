const data = require("../config/config");

const examSevices=async(startInx,limit)=>{
try {
  const sql=`select studentMaster1.studentId,studentMaster1.firstName, studentMaster1.lastName, sum(case when examType='PRELIM' then examMaster1.P_Marks end) as practical_P,
  sum(case when examType='PRELIM' then examMaster1.T_Marks end) as Theory_P,
  sum(case when examType='TERMINAL' then examMaster1.P_Marks end) as practical_T,
  sum(case when examType='TERMINAL' then examMaster1.T_Marks end) as Theory_T,
  sum(case when examType='FINAL' then examMaster1.P_Marks end) as practical_F,
  sum(case when examType='FINAL' then examMaster1.T_Marks end) as Theory_F,
  (sum(case when examType='PRELIM' then examMaster1.T_Marks end)+sum(case when examType='PRELIM' then examMaster1.P_Marks end)
  +sum(case when examType='TERMINAL' then examMaster1.P_Marks end)+sum(case when examType='TERMINAL' then examMaster1.T_Marks end)
  +sum(case when examType='FINAL' then examMaster1.P_Marks end)+sum(case when examType='FINAL' then examMaster1.T_Marks end))as Obtainmarks
  from examMaster1  inner join studentMaster1 on studentMaster1.studentId=examMaster1.studentId
  group by studentMaster1.studentId limit ${startInx} ,${limit};`
  const [result]=await data.execute(sql);
  return result;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}

const searchDataServices=async(sid)=>{
try {
  const sql1=`select studentMaster1.studentId,studentMaster1.firstName, studentMaster1.lastName, sum(case when examType='PRELIM' then examMaster1.P_Marks end) as practical_P,
  sum(case when examType='PRELIM' then examMaster1.T_Marks end) as Theory_P,
  sum(case when examType='TERMINAL' then examMaster1.P_Marks end) as practical_T,
  sum(case when examType='TERMINAL' then examMaster1.T_Marks end) as Theory_T,
  sum(case when examType='FINAL' then examMaster1.P_Marks end) as practical_F,
  sum(case when examType='FINAL' then examMaster1.T_Marks end) as Theory_F,
  (sum(case when examType='PRELIM' then examMaster1.T_Marks end)+sum(case when examType='PRELIM' then examMaster1.P_Marks end)
  +sum(case when examType='TERMINAL' then examMaster1.P_Marks end)+sum(case when examType='TERMINAL' then examMaster1.T_Marks end)
  +sum(case when examType='FINAL' then examMaster1.P_Marks end)+sum(case when examType='FINAL' then examMaster1.T_Marks end))as Obtainmarks
  from examMaster1  inner join studentMaster1 on studentMaster1.studentId=examMaster1.studentId where studentMaster1.studentId=${sid}
  group by studentMaster1.studentId ;`
  const [result1]=await data.execute(sql1);
  console.log(result1);
  return result1;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}

const searchFieldServices=async(search,firstName,lastName)=>{
  try {
    const sql3=`select studentMaster1.studentId,studentMaster1.firstName, studentMaster1.lastName, sum(case when examType='PRELIM' then examMaster1.P_Marks end) as practical_P,
    sum(case when examType='PRELIM' then examMaster1.T_Marks end) as Theory_P,
    sum(case when examType='TERMINAL' then examMaster1.P_Marks end) as practical_T,
    sum(case when examType='TERMINAL' then examMaster1.T_Marks end) as Theory_T,
    sum(case when examType='FINAL' then examMaster1.P_Marks end) as practical_F,
    sum(case when examType='FINAL' then examMaster1.T_Marks end) as Theory_F,
    (sum(case when examType='PRELIM' then examMaster1.T_Marks end)+sum(case when examType='PRELIM' then examMaster1.P_Marks end)
    +sum(case when examType='TERMINAL' then examMaster1.P_Marks end)+sum(case when examType='TERMINAL' then examMaster1.T_Marks end)
    +sum(case when examType='FINAL' then examMaster1.P_Marks end)+sum(case when examType='FINAL' then examMaster1.T_Marks end))as Obtainmarks
    from examMaster1  inner join studentMaster1 on studentMaster1.studentId=examMaster1.studentId 
    where studentMaster1.firstName like '%${firstName}%' ${search} studentMaster1.lastName like '%${lastName}%'
    group by studentMaster1.studentId ;`
console.log(sql3);
    const [result3]=await data.execute(sql3);
    console.log(result3);
    return result3;
  } catch (error) {
    console.log(`Error`, error)
  throw error;
  }
}

const searchPaginationServices=async(inputtext,startInx,limit)=>{
try {
  const sql4=`select studentMaster1.studentId,studentMaster1.firstName, studentMaster1.lastName, sum(case when examType='PRELIM' then examMaster1.P_Marks end) as practical_P,
  sum(case when examType='PRELIM' then examMaster1.T_Marks end) as Theory_P,
  sum(case when examType='TERMINAL' then examMaster1.P_Marks end) as practical_T,
  sum(case when examType='TERMINAL' then examMaster1.T_Marks end) as Theory_T,
  sum(case when examType='FINAL' then examMaster1.P_Marks end) as practical_F,
  sum(case when examType='FINAL' then examMaster1.T_Marks end) as Theory_F,
  (sum(case when examType='PRELIM' then examMaster1.T_Marks end)+sum(case when examType='PRELIM' then examMaster1.T_Marks end)
  +sum(case when examType='FINAL' then examMaster1.P_Marks end)+sum(case when examType='FINAL' then examMaster1.T_Marks end))as Obtainmarks
  from examMaster1 inner join studentMaster1 on studentMaster1.studentId=examMaster1.studentId 
  where studentMaster1.firstName like '%${inputtext[1]}%' ${inputtext[0]} studentMaster1.lastName like '%${inputtext[2]}%'
  group by studentMaster1.studentId limit ${startInx},${limit};`
  const [result4]=await data.execute(sql4);
  return result4;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}

const detailStudentServices=async(id)=>{
try {
  const sql5=`select studentMaster1.firstName,studentMaster1.studentId, Subject1.subjectId, Subject1.subjectName, examMaster1.P_Marks,examMaster1.T_Marks, examMaster1.examType,
  (examMaster1.P_Marks+examMaster1.T_Marks)as ObtainMarks
   from examMaster1  
  inner join studentMaster1 on studentMaster1.studentId=examMaster1.studentId 
  inner join Subject1 on Subject1.subjectId=examMaster1.subjectId
   where studentMaster1.studentId=?;`
   const [result5]=await data.execute(sql5,[id]);
    return result5;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}


module.exports={examSevices,searchDataServices,searchFieldServices,searchPaginationServices,detailStudentServices};