const express=require('express')
const app=express()
const path=require('path')

app.use(express.static('public'));
//middleware name urlencoded 
app.use(express.urlencoded({extended:false}))
let books=[
    {id:1,title:'Book 1' ,author:'Author  1'},
    {id:2,title:'Book 1', author:'Author  2'},
]


app.get('/',(req,res) =>{
     res.sendFile(path.join(__dirname,'index9.html'));
    
})
app.get('/data',(req,res) =>{
    res.json(books)
})
// app.get('/books',(req,res) =>{
//    res.json(books); 
// })
app.post('/books',(req,res) =>{
    const newBook={
 author:req.body.author,
 id:books.length+1,
 title:req.body.title,
    }
    books.push(newBook)
    res.status(201).json(newBook)

})
app.listen(5800,()=>{
    console.log("server started at 5800")
})