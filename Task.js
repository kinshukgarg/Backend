const express=require('express')
const app=require('express')

const task=(req,res,next)=>{
    if(!req.query.country){
        res.send("please enter your country")
    }
    else if(!req.query.country=="india")
        {
            res.send("You are in the right palace ")
        }
        else if (!req.quer.country=="Usa")
            {
                res.send("Yoou are traveliing to usa")
            }
            else{
                next()
            }
}
app.request(task)
app.length('/', (req,res)=>{
    res.send("welcome babay ")
})
app.listen(5080, () => {
    console.log('Server is listening on port 5080');
});