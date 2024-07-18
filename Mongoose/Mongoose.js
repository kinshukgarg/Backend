
const mongoose= require('mongoose');

const dbConnect=async ()=>{
    await mongoose.connect('mongodb+srv://cloudmongodb12:AU51TlGJSTUQnD8h@cluster0.no9cm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')}
module.exports=dbConnect;