const data = require("../config/config");

const insertDataServices=async(body,mainId)=>{
  try {
   
    let query1 = `insert into basic_detail (first_name,last_name,designation,address1,address2,email,phone_number,city,gender,zip_code,relationashi_status,state,date_of_birth)
      values 
      (?,?,?,?,?,?,?,?,?,?,?,?,?);`
      const [row]=await data.execute(query1,[body.fname,body.lname,body.designation,body.add1,body.add2,body.email,body.number,body.city,body.gd,body.zip,body.status,body.state,body.dob]);
      console.log(row);

      const year = body.year.split(',');
      const board = body.board.split(',');
      const Percentage = body.Percentage.split(',');
      for (var i = 0; i < board.length; i++) {
        if (board[i] != "" && year[i] != "" && Percentage[i] != "") {
          console.log(i);
          let query2 = `insert into education (passing_year,percentage,cource_name,basic_id)
        values
        (?,?,?,?);`
        const [result2]=await data.execute(query2,[year[i],Percentage[i],board[i],row.insertId])
       
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

          const [result3]=await data.execute(query3,[name[i],design[i],from[i],to[i],row.insertId])
        }
      }

     
        const language1 = body.language1;
        const skill1 = body.skill1.split(',');
        for (var i = 0; i < skill1.length; i++) {
          if (language1 != "" && skill1[i] != "") {
          let query4 = `insert into language_known(language_type,language_skill,basic_id)
          values
          (?,?,?);`

          const [result4]=await data.execute(query4,[language1,skill1[i],row.insertId]);
         
        }
      }
      const language2 = body.language2;
        const skill2 = body.skill2.split(',');
        for (var i = 0; i < skill2.length; i++) {
          if (language2 != "" && skill2[i] != "") {
          let query5 = `insert into language_known(language_type,language_skill,basic_id)
          values
          (?,?,?);`

          const [result5]=await data.execute(query5,[language2,skill2[i],row.insertId]);
         
        }
      }
      const language3 = body.language3;
      const skill3 = body.skill3.split(',');
      for (var i = 0; i < skill3.length; i++) {
        if (language3 != "" && skill3[i] != "") {
        let query6 = `insert into language_known(language_type,language_skill,basic_id)
        values
        (?,?,?);`

        const [result6]=await data.execute(query6,[language3,skill3[i],row.insertId]);
       
      }
    }

    let query7 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
      const [result7]=await data.execute(query7,[body.technologi1,body.tech_skill1,row.insertId])
    console.log(result7);

    let query8 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
      const [result8]=await data.execute(query8,[body.technologi2,body.tech_skill2,row.insertId])
    console.log(result8);

    let query9 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
      const [result9]=await data.execute(query9,[body.technologi3,body.tech_skill3,row.insertId])
    console.log(result9);

    let query10 = `insert into technology(technology_name,technology_skill,basic_id)
    values
    (?,?,?);`
      const [result10]=await data.execute(query10,[body.technologi4,body.tech_skill4,row.insertId])
    console.log(result10);

    const refname = body.refname.split(',');
    const num = body.num.split(',');
    const relation = body.relation.split(',');
    for (var i = 0; i < refname.length; i++) {
      if (refname[i] != "" && num[i] != '' && relation[i] != '') {
        let query11 = `insert into referance(name,contact_number,relation,basic_id)
        values(?,?,?,?);`
       const [result11]=await data.execute(query11,[refname[i],num[i],relation[i],row.insertId])
        
      }
    }

    let query12 = `insert into preferance(preferd_location,notice_period,expacted_ctc,current_ctc,department,basic_id)
  values
  (?,?,?,?,?,?);`
       const [result12]=await data.execute(query12,[body.location,body.nt,body.Ctc1,body.Ctc2,body.dp,row.insertId])

      return {row:row.insertId};
    }catch (error) {
      console.log(`Error`, error)
      throw error;
    }
    
}
module.exports={insertDataServices};