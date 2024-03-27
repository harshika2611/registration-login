const data = require("../config/config");

const UserLoginService=async(body)=>{
  try {
    const sql0=`SELECT regi_email,regi_password,sault FROM registration_21.registration_table where regi_email=?;`
    const [result]=await data.execute(sql0,[body.Email]);
    // console.log(sql0);
    // console.log(result,"aaaaaaaaaa");
    return result;
  } catch (error) {
    console.log(`Error`, error)
    throw error;
  }
}
module.exports={UserLoginService}