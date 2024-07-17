const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://cloudmongodb12:AU51TlGJSTUQnD8h@cluster0.no9cm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const UsersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
const UsersModel = mongoose.model('users', UsersSchema);

const main = async () => {
    let data = new UsersModel({
        name: "Bob Smith",
        age: 30,
        email: "bob.smith@example.com"
    });

    let result = await data.save();
    console.log(result);
};
//update data
// const updateInDB = async () => {
//     let data = await UsersModel.updateMany(
//         { name: "Bob Smith" },
//         { $set: { age: 20, name: "hello" } }
//     );
//     console.log(data);
// };
// delete data 
// const deleteFromDB=async()=>{
//     let result=await UsersModel.deleteOne({name:"hello"})
//     console.log(result)
// }

main();
// deleteFromDB();

app.listen(8500, () => {
    console.log("server started at 8500");
});





