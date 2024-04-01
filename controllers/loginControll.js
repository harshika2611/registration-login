const { UserLoginService } = require("../services/loginServices");
const md5 = require("md5");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const userLogin = async (req, res) => {
  try {

    const user = await UserLoginService(req.body);
    const email = req.body.Email;
    if (user.length > 0) {
      const password = md5(user[0].sault + req.body.password);

      if (password == user[0].regi_password) {

        const token = jwt.sign({ email: email }, SECRET_KEY,{expiresIn:'1h'});
     
        return res
        .cookie("token",token,{
          httpOnly:true
        })
        .redirect("http://localhost:8050/api/login/home")
       
        // const cookie = res.cookie('token',token, {
        //   httpOnly:true,  
        //   maxAge:60
        // })
  
        // res.render("home",{email,cookie})
        
      } else {
        const error = "Invalid email or password"
        res.render("login", { error: error })
      }

    } else {
      const error = "Invalid email or password"
      res.render("login", { error: error },"+++++++++++")
    }

  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "can`t fetch user controller" })
  }
}

module.exports = { userLogin };