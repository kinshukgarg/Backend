const express=require('express')
const app=express()
const multer=require('multer')

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads")
        },
     filename:function(req,file,cb)
     {
        cb(null,file.fieldname+"_"+Date.now()+".jpg")
     }
    })

}).single("user_files")
app.post('/upload', upload,(req,res)=>{
    res.send("completed")
})

app.listen(5800,()=>{
    console.log("server started at 5000")
})