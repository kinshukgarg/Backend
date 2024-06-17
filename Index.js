const fs=require('fs')
//  fs.readFile('a.txt','utf-8',(err,data)=>{
//     console.log(data)
//  })

// fs.writeFile('b.txt', "hi Kinshuk", (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//     } else {
//       console.log("written to file");
//     }
//   });
 fs.open('abc.js','a',function(err,file){
    console.log('saved')
 })
 fs.appendFile('abc.js',"hi kinshuk",function(err){
    if(err)throw err;
    console.log('updated file data')
 })
//  fs.rename('new.html','excellence.html',function(err){
//     if(err)throwerr;
//     console.log("mission complete")
//  })
 fs.unlink("excellence.html",function(err){
    if(err)throw err;
    console.log("file deleted")
 })