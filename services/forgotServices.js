const data = require("../config/config");
const md5=require("md5");
const forgotServices=async(body)=>{
try {
  console.log(body);
  const sault=Math.floor((Math.random()*10000)+1);
  const key=md5(sault.toString()+body.new_pass);
  
  const sql1=`update registration_table set date=?,regi_password=?,sault=? where regi_email=?`
  const [ans]=await data.execute(sql1,[new Date(),key,sault,body.Email]);
  console.log(ans);
  return ans.changedRows;


  
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}
module.exports={forgotServices};