const mysql = require('mysql')
  const connection = mysql.createConnection({
    host:'localhost',
    database:'users_priyanshu_demo',
    password:"",
    user:'root'
  })
  connection.connect(()=>{
    try {
      console.log("db connected");
    } catch (error) {
      console.log(error);
    }
  })


module.exports = connection