const express=require('express')
const app=express()
const {MongoClient}=require('mongodb')

const url='mongodb+srv://cloudmongodb12:AU51TlGJSTUQnD8h@cluster0.no9cm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const database="ecommerce"

const client=new MongoClient(url)

async function getData()
{
    let result = await client.connect()
    let db=result.db(database)
    let collection=db.collection('users')
    // let response=await collection.find({}).toArray();
    // let response =await collection.insertOne({name:"hardik",age:"25",email:"hardik12@example.com"})
    // let response= await collection.deleteOne({name:"hardik",age:"25",email:"hardik12@example.com"})
    let response = await collection.updateOne(
        { name: "hardik" }, 
        { $set: { someField: "ajay" } } 
    );

    console.log(response)
}
getData();