const {delimiterSearchServices,searchDelimeterServices}=require("../services/delimiterService");

const delimiterSearch=async(req,res)=>{
try {
  const rows=await delimiterSearchServices();
 
  res.render('delimeter/template1',{rows:rows})
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
}
}

const searchWithDelimeter=async(req,res)=>{
try {
  var delim = req.body.delimeter;

  const obj = {}


  obj[":"] = [];
  obj["}"] = [];
  obj["{"] = [];
  obj["$"] = [];
  obj["^"] = [];
  obj["_"] = [];


  let regx = ["_", "^", "$", "{", "}", ":"];
  for (let i = 0; i < delim.length; i++) {
    let firstname = [];   
    if (regx.includes(delim[i])) {
      for (let j = i + 1; j < delim.length; j++) {
        if (regx.includes(delim[j])) {

          break;
        }
        firstname.push(delim[j]);

      }

      obj[delim[i]].push(firstname.join(""));
    }

  }
 
  
 const rows=await searchDelimeterServices(obj); 

 if(rows.deliSql=="select * from studentMaster3 wh"){
  res.send("Enter valid input")
 }
 res.render('delimeter/template1', { rows: rows.rows, obj: obj });
} catch (error) {
  console.error("error", error);
  res.status(500).json({message:"can`t fetch user controller"});
}
}


module.exports={delimiterSearch,searchWithDelimeter};