const express=require('express')
const app=express();
const middleware=(req,res,next)=>{
    if(!req.query.vote){
        res.send("Click it")
    }
    else if
        (req.query.vote<18){
            res.send("You cant acces because you are small to vote ")
        }
        else{
            next();
        }
    
}
app.use(middleware)
app.get('/',function(req,res){
    res.send("Welcome to Voting machine")
})
app.get('/Home',function(req,res){
    res.send("so sorry this is not home page")
})