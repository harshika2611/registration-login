const data = require("../config/config");

const delimiterSearchServices=async()=>{
try {
  const sql=`SELECT * FROM studentMaster3;`
  const [result]=await data.execute(sql);
  return result;
} catch (error) {
  console.log(`Error`, error)
  throw error;
}
}

const searchDelimeterServices=async(obj)=>{
  try {
    function sqlQuery() {
      var sql = `select * from studentMaster where`
      var list = Object.keys(obj);
  
      for (let i = 0; i < obj.length; i++) {
      
        if (obj[list[i]].length > 0) {
          switch (list[i]) {
            case "_":
              sql = sql + firstname(obj["_"]) + "and"
              break;
            case "^":
              sql = sql + lastname(obj["^"]) + "and"
              break;
            case "$":
              sql = sql + email(obj["$"]) + "and"
              break;
            case "{":
              sql = sql + age(obj["{"]) + "and"
              break;
            case "}":
              sql = sql + city(obj["}"]) + "and"
              break;
            case ":":
              sql = sql + Country(obj[":"])
            default:
              break;
          }
        }
      }
     
      return sql;
    }
    function firstname(obj) {
      var query = `(firstname like `;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(firstname like '%''%')`;
      }
      else {
        return query;
      }
    }
  
    function lastname(obj) {
      var query = `(lastname like`;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(lastname like '%''%')`;
      }
      else {
        return query;
      }
    }
    
    function email(obj) {
      var query = `(email like`;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(email like '%''%')`;
      }
      else {
        return query;
      }
    }
  
    function age(obj) {
      var query = `(age like`;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(age like '%''%')`;
      }
      else {
        return query;
      }
    }
  
    function city(obj) {
      var query = `(city like`;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(city like '%''%')`;
      }
      else {
        return query;
      }
    }
  
    function Country(obj) {
      var query = `(Country like`;
      for (let i = 0; i < obj.length; i++) {
        if (i == obj.length - 1) {
          query = query + `'%${obj[i]}%')`;
        } else {
          query = query + `'%${obj[i]}%'` + ` or `;
        }
      }
      if (obj.length <= 0) {
        return `(Country like '%''%')`;
      }
      else {
        return query;
      }
    }
  const [result1]=await data.execute(sqlQuery());

  } catch (error) {
    console.log(`Error`, error)
  throw error;
  }
}

module.exports={delimiterSearchServices,searchDelimeterServices};