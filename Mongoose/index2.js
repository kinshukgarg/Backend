
const express=require('express')
const app=express()

const mongodb=require('mongodb')
const mongoose=require('mongoose')

const bodyParser=require('body-parser')
const dbConnect=require('./Mongoose')
const Userssche=require('./UsersSchema')


app.get('/list', async (req,resp) =>{
let data= await dbConnect()
let result=data.find().toArray()
console.log(data)
resp.send(data)
})

app.post('/data',async(req,resp)=>{
    let data =await dbConnect()
    let result =await data.insertone(req.body)
    resp.send(result)
})
 app.delete('/user/:id',async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await UsersModel.deleteOne({ _id: req.params.id });
    resp.send('compeletd')
 })






app.listen(7500,()=>{
    console.log('server started at 7500')
})