const data = require("../config/config");
const md5=require("md5");

const checkRegiService=async(body)=>{
  try {
    const sql0=`SELECT regi_email FROM registration_21.registration_table where regi_email=?;`
    const [result]=await data.execute(sql0,[body.Email]);
    console.log(sql0);
    console.log(body.Email);
 
    return result;
  } catch (error) {
    console.log(`Error`, error)
    throw error;
  }
}

const registerService = async (body,link) => {
  try {
   
    const sql1 = `insert into registration_table (regi_name,regi_email,regi_contact,link,status)
  values
  (?,?,?,?,?); `;
    const [result] = await data.execute(sql1,[body.name,body.Email,body.Contact,link,"Deactive"]);
      return result.insertId;
  } catch (error) {
    console.log(`Error`, error)

    throw error;
  }
};

const generatePassService= async (body,key,link) => {
  try {
    const main=key.toString()+body.create_pass;
    const mainKey=md5(main);
   
    const sql2 = `update registration_table set regi_password=?, sault=?, status='Active' where link=?`;
    const [result] = await data.execute(sql2,
      [mainKey,key,link.link]);
      return result;
  } catch (error) {
    console.log(`Error`, error)
    throw error;
  }
}
const expireService = async (link)=>{
try {
    const sql3='SELECT `date` FROM registration_21.registration_table where link=?;'

    const [result]=await data.execute(sql3,[link.link]);
  console.log(result);
    return result[0].date;
    
   } catch (error) {
    console.log(`Error`, error)
    throw error;
   }

}



module.exports = { registerService,generatePassService,expireService,checkRegiService};
