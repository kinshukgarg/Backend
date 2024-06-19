const express=require('express')

var app=express();

app.listen(5004,function(){
    console.log("server started")
})
app.get("/home",function(req,resp){
    resp.write("welcome")
    resp.end()
})