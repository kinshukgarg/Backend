const express=require('express')
const app=express()
const mongodb=requir0e('mongodb')
const bodyParser=require('body-parser')

app.use(express.json())
app.use(bodyParser.json())

app.get('/',async(req,resp)=>{
let data=await dbConnect()
data=await data.find().toArray()
console.log(data)
resp.send(data)
})

app.post('/',async(req,resp)=>{
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    resp.send(result)
})

app.put ('/', async(req,resp)=>{
    let data = await dbConnect()
    let result=data.updateOne({_id:new mongodb.ObjectId})
})