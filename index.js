const connection= require('./config')
const express= require('express')
const app = express()
const boyParser=require('body-parser')
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


//get api 
app.get('/get',(req, resp)=>{
  connection.query('select * from users',(err,result)=>{
    if(err){
      return resp.status(401).json({success:false,message:"Internal error"})
    }
    return resp.status(200).json({success:true,message:result})
  })
 
})

//post api  
app.post('/post',(req,resp)=>{
  const {EmpAge,EmpName,EmpId} =req.body
  const data = {EmpId,EmpName,EmpAge}
  connection.query('Insert INTO users set ?',data , (err,result)=>{
    if(err){
      return resp.status(401).json({success:false,message:"Internal error"})
    }
    return resp.status(200).json({success:true,message:result})
  })
})

//put api 
app.put('/put/:id',(req,resp)=>{
  const {EmpAge,EmpName,EmpId} =req.body
  const {id} = req.params;
  const data = [EmpId,EmpName,EmpAge,id]
  connection.query('UPDATE users SET EmpId=? ,EmpName=? , EmpAge=? where EmpId= ?  ',data,(err,result,fields)=>{
    if(err){
      return resp.status(401).json({success:false,message:"Internal error"})
    }
    return resp.status(200).json({success:true,message:result})
  })
})

//delete api 
app.delete('/delete/:id',(req,resp)=>{
  const {id} = req.params
  connection.query("DELETE FROM users WHERE EmpID="+id,(err,result)=>{
    if(err){
      return resp.status(401).json({success:false,message:"Internal error"})
    }
    return resp.status(200).json({success:true,message:result})
  })
})









// app running on port 
app.listen(port,()=>{
  console.log(`App is running on port ${port}`)
})