const http=require('http')
const fs=require('fs')
//const path =require('path')
http.createServer((req,resp)=>{
    //console.log (req.url);
    if (req.url == "/") {
        resp.end("Welcome to home page");
    } else if (req.url == "/about") {
        resp.end("Nothing is written in it");
    } else if (req.url == "/contact") {
        resp.end("This is the page to contact me");
    } else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) =>{
            console.log(data)
            resp.end(data)
        });
    
    }
})