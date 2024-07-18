const {MongoClient}=require('mongodb')

const url='mongodb+srv://cloudmongodb12:AU51TlGJSTUQnD8h@cluster0.no9cm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const database="ecommerce"

const client=new MongoClient(url)

async function dbConnect(){
    let result=await  client.connect()
    db=result.db(database)
    return db.collection('users')
}
module.exports=dbConnect;