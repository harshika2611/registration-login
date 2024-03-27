const mysql = require('mysql2/promise');

const data = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Harshi@2611",
  database: "registration_21",
  dateStrings: true
});
data.connect
console.log("connected"); 
module.exports = data;