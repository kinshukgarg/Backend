const express=require('express')
const app=express()

app.get('/',(req,res) =>{
    resp.sendFile(path.join(__dirname,'index9.html'));
})
app.get('/books',(req,res) =>{
    
})
app.listen(5800,()=>{
    console.log("server started at 5500")
})