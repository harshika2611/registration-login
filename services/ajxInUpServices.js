const data = require("../config/config");

const insertDataServices = async (body, mainId) => {
  try {

    let query1 = `insert into basic_detail (first_name,last_name,designation,address1,address2,email,phone_number,city,gender,zip_code,relationashi_status,state,date_of_birth)
      values 
      (?,?,?,?,?,?,?,?,?,?,?,?,?);`
    const [row] = await data.execute(query1, [body.fname, body.lname, body.designation, body.add1, body.add2, body.email, body.number, body.city, body.gd, body.zip, body.status, body.state, body.dob]);
    

    const year = body.year.split(',');
    const board = body.board.split(',');
    const Percentage = body.Percentage.split(',');
    for (var i = 0; i < board.length; i++) {
      if (board[i] != "" && year[i] != "" && Percentage[i] != "") {
       
        let query2 = `insert into education (passing_year,percentage,cource_name,basic_id)
        values
        (?,?,?,?);`
        const [result2] = await data.execute(query2, [year[i], Percentage[i], board[i], row.insertId])

      }
    }


    const name = body.name.split(',');
    const design = body.design.split(',');
    const from = body.from.split(',');
    const to = body.to.split(',');
    for (var i = 0; i < name.length; i++) {
      if (name[i] != "" && design[i] != "" && from[i] != "" && to[i] != "") {
        let query3 = `insert into workexperiance(companyname,designation,from_date,to_date,basic_id)
        values(?,?,?,?,?);`

        const [result3] = await data.execute(query3, [name[i], design[i], from[i], to[i], row.insertId])
      }
    }


    if (body.language1 != "" && body.skill1 != "" && body.language1 != undefined && body.skill1 != undefined) {
      const language1 = body.language1;
      const skill1 = body.skill1.split(',');
      for (var i = 0; i < skill1.length; i++) {
        let query4 = `insert into language_known(language_type,language_skill,basic_id)
        values
        (?,?,?);`
     const [result4]=await data.query(query4,[language1, skill1[i], row.insertId])
      }
    }
    if (body.language2 != "" && body.skill2 != "" && body.language2 != undefined && body.skill2 != undefined) {
      const language2 = body.language1;
      const skill2 = body.skill1.split(',');
      for (var i = 0; i < skill2.length; i++) {
        let query5 = `insert into language_known(language_type,language_skill,basic_id)
        values
        (?,?,?);`
     const [result5]=await data.execute(query5,[language2, skill2[i], row.insertId])
      }
    }
    if (body.language3 != "" && body.skill3 != "" && body.language3 != undefined && body.skill3 != undefined) {
      const language3 = body.language3;
      const skill3 = body.skill3.split(',');
      for (var i = 0; i < skill3.length; i++) {
        let query6 = `insert into language_known(language_type,language_skill,basic_id)
        values
        (?,?,?);`
     const [result5]=await data.execute(query6,[language3, skill3[i], row.insertId])
      }
    }

    if(body.technologi1!=undefined){
    let query7 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
    const [result7] = await data.execute(query7, [body.technologi1, body.tech_skill1, row.insertId])
    
    }
    if(body.technologi2!=undefined){
    let query8 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
    const [result8] = await data.execute(query8, [body.technologi2, body.tech_skill2, row.insertId])
   
    }
    if(body.technologi3!=undefined){
    let query9 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
    const [result9] = await data.execute(query9, [body.technologi3, body.tech_skill3, row.insertId])
    
    }
    if(body.technologi4!=undefined){
    let query10 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
    const [result10] = await data.execute(query10, [body.technologi4, body.tech_skill4, row.insertId])

    }

    if(body.refname!=undefined){
    const refname = body.refname.split(',');
    const num = body.num.split(',');
    const relation = body.relation.split(',');
    for (var i = 0; i < refname.length; i++) {
      if (refname[i] != "" && num[i] != '' && relation[i] != '') {
        let query11 = `insert into referance(name,contact_number,relation,basic_id)
        values(?,?,?,?);`
        const [result11] = await data.execute(query11, [refname[i], num[i], relation[i], row.insertId])

      }
    }
  }
  if(body.location!='' && body.nt!='' && body.Ctc1!='' && body.Ctc2!='' && body.dp!=''){
    let query12 = `insert into preferance(preferd_location,notice_period,expacted_ctc,current_ctc,department,basic_id)
  values
  (?,?,?,?,?,?);`
    const [result12] = await data.execute(query12, [body.location, body.nt, body.Ctc1, body.Ctc2, body.dp, row.insertId])
  }
    return { row: row.insertId };
  } catch (error) {
    console.log(`Error`, error)
    throw error;
  }

}

const fetchDataServices = async (id) => {
  try {
    var sql1 = `SELECT first_name as fname,last_name as lname,designation,address1 as add1,address2 as add2,email as email,phone_number as number,
  city as city,gender as gd,zip_code as zip,relationashi_status as status,state as state,date_of_birth as dob FROM basic_detail where basic_id=?;`
    const [rows] = await data.execute(sql1, [id]);
    
    var sql2 = `SELECT passing_year as year,percentage as Percentage,cource_name as board  FROM education where basic_id=?;`
    const [rows1] = await data.execute(sql2, [id]);

    var sql3 = ` SELECT companyname as name,designation as design,from_date as 'from', to_date as 'to' FROM workexperiance where basic_id=?;`
    const [rows3] = await data.execute(sql3, [id]);

    var sql4 = `SELECT language_type as language,language_skill as skill FROM language_known where basic_id=?;`
    const [rows4] = await data.execute(sql4, [id]);

    var sql5 = `SELECT technology_name,technology_skill FROM technology where basic_id=?;`
    const [rows5] = await data.execute(sql5, [id]);

    var sql6 = `SELECT name as refname,contact_number as num,relation as relation FROM referance where basic_id=?;`
    const [rows6] = await data.execute(sql6, [id]);

    var sql7 = `SELECT preferd_location as location,notice_period as nt,expacted_ctc as Ctc1,current_ctc as Ctc2,department as dp FROM preferance where basic_id=?;`
    const [rows7] = await data.execute(sql7, [id]);
   

    return { basicdata: rows, edudata: rows1, work: rows3, lang: rows4, tech: rows5, referance: rows6,preferance:rows7};
  } catch (error) {
    console.log(`Error`, error)
    throw error;
  }
}

const detailUpdateServices=async(id)=>{
try {
 const query1=`select basic_id,first_name,last_name,email,city,state from basic_detail`
 const [ans]=await data.execute(query1)

 return ans;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}

const updateDataServices=async(body,id)=>{
try {
  var sql0 =`SELECT education_id FROM education where  basic_id=${id}; 
  SELECT workexperiance_id FROM workexperiance where  basic_id=${id};
  SELECT language_id FROM language_known where  basic_id=${id};
  SELECT technology_id FROM technology where  basic_id=${id};
  SELECT referance_id FROM referance where  basic_id=${id};`
  
 const [result] =await data.query(sql0);
 

var sql1 = `update basic_detail set first_name=?,last_name=?,designation=?,address1=?,address2=?,email=?,phone_number=?,city=?,gender=?,zip_code=?,relationashi_status=?,state=?,date_of_birth=? where basic_id=?;`    
const [result1]=await data.execute(sql1,[body.fname,body.lname,body.designation,body.add1,body.add2,body.email,body.number,body.city,body.gd,body.zip,body.status,body.state,body.dob,id]);




const year = body.year.split(',');
const Percentage = body.Percentage.split(',');
const board = body.board.split(',');
   var i =0
    year.forEach(async (element) => { 
      if (element!="") {       
        var sql2 = `update education set passing_year=?,percentage=?,cource_name=? where education_id=?;`  
      const [result2]= await data.execute(sql2,[element,Percentage[i],board[i],result[0][i].education_id]);
    
      }                   
      i++
    });

    const name = body.name.split(',');
      const design = body.design.split(',');
      const from = body.from.split(',');
      const to = body.to.split(',');
         var i =0
          name.forEach(async (element) => { 
            if (element!="") {
              var sql3 = `update workexperiance set companyname=?,designation=?,from_date=?,to_date=? where workexperiance_id=?;`
            
            const [result3]=await data.query(sql3,[element,design[i],from[i],to[i],result[1][i].workexperiance_id]);
            
            }                   
            i++
          });

          if (body.language1 != "" && body.skill1 != "" && body.language1 != undefined && body.skill1 != undefined) {
          const language1 = body.language1;
          const skill1 = body.skill1.split(',');
          for (var i = 0; i < skill1.length; i++) {
            var sql4 = `update language_known set language_type=?,language_skill=? where basic_id=?;`
          
          const [result4]=await data.execute(sql4,[language1,skill1[i],result[2][i].language_id]);
          }
        }
        if (body.language2 != "" && body.skill2 != "" && body.language2 != undefined && body.skill2 != undefined) {
          const language2 = body.language2;
          const skill2 = body.skill2.split(',');
          for (var i = 0; i < skill2.length; i++) {
            var sql5 = `update language_known set language_type=?,language_skill=? where basic_id=?;`
            
          const [result5]=await data.execute(sql5,[language2,skill2[i],result[2][i].language_id]);
          }
        }
        if (body.language3 != "" && body.skill3 != "" && body.language3 != undefined && body.skill3 != undefined) {
          const language3 = body.language3;
          const skill3 = body.skill3.split(',');
          for (var i = 0; i < skill3.length; i++) {
            var sql6 = `update language_known set language_type=?,language_skill=? where basic_id=?;`
           
          const [result6]=await data.execute(sql6,[language3,skill3[i],result[2][i].language_id]);
          }
        }

          const refname = body.refname.split(',');
          const num = body.num.split(',');
          const relation = body.relation.split(',');
             var i =0
             refname.forEach(async (element) => { 
                if (element!="") {
               
                  var sql6 = `update referance set name=?,contact_number=?,relation=? where referance_id=?;`
                
                const [result6]=await data.query(sql6, [element,num[i],relation[i],result[4][i].referance_id]);
                
                }                   
                i++
              });

              var sql7 = `update preferance set preferd_location=?,notice_period=?,expacted_ctc=?,current_ctc=?,department=? where basic_id=?;`    
              const [result7]=await data.execute(sql7,[body.location,body.nt,body.Ctc1,body.Ctc2,body.dp,id]);
               

} catch (error) {
  console.log(`Error`, error)
    throw error;
}
}
module.exports = { insertDataServices, fetchDataServices,updateDataServices,detailUpdateServices};