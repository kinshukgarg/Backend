const express=require('express')
const app=express()

app.get('/', (req, res) => {
 res.send("hello world")
  });
  app.post('/Home',(req,res) =>{
    res.send("This is to make new api in the backend")
  })
  app.delete('/Home',(req,res) =>{
    res.send("file delted")
  })
  app.put('/Home',(req,resp) =>{
    resp.send("hi")
  })
app.listen(9500, () => {
    console.log('Server is listening on port 9500');
});