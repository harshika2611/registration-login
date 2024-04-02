const { UserLoginService } = require("../services/loginServices");
const md5 = require("md5");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET_KEY,URL } = process.env;

const userLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await UserLoginService(req.body);
    // console.log(user);
    const email = req.body.Email;
    if(user[0].status=="Active"){
      const timer=user[0].date;
      const newtime=new Date().toDateString();
     
      const expeireTimer=new Date(new Date(timer).getTime()+96*8640000).toDateString();   

      if(newtime>expeireTimer){
        if (user.length > 0) {
          const password = md5(user[0].sault + req.body.password);
    
          if (password == user[0].regi_password) {
    
            const token = jwt.sign({ email: email }, SECRET_KEY,{expiresIn:'1h'});

            return res
            .cookie("token",token,{
              httpOnly:true
            })
            .redirect(`${URL}/api/login/home`)
           
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
          res.render("login", { error: error })
        }
      }else{
        const error = "expired password create new one"
        // res.render("forgot", { error_expire: error })
        // req.flash("error_expire", "expired password create new one")
        res.redirect(`${process.env.URL}/api/forgot`)
      }
    }else {
      const error = "Invalid email or password"
      res.render("login", { error: error })
    }

  } catch (error) {
    console.error("error", error);
    res.status(500).json({ message: "can`t fetch user controller" })
  }
}

module.exports = { userLogin };