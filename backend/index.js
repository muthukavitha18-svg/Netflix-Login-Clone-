const express=require("express")
const cors=require("cors")

const app=express()


var user="user@gmail.com"
var pass="password123"

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.get("/login", function(req,res){
    console.log(req.query.username)
    if(req.query.username===user && req.query.password==pass)
   { res.send(true)}
else
    {res.send(false)}
    
 })

app.listen(3000,function(){
    console.log("server started...")
})