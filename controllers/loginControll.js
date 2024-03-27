const { UserLoginService } = require("../services/loginServices");
const md5 = require("md5");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const userLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await UserLoginService(req.body);
    const email = req.body.Email;
    if (user.length > 0) {
      const password = md5(user[0].sault + req.body.password);
      if (password == user[0].regi_password) {
        const token = jwt.sign({ email: email }, SECRET_KEY);
        console.log(token);
       const result= res.cookie('token', token, {
          httpOnly: true,
        });
        res.render("home")
        return result;
        
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