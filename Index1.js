const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/excel.txt`;


fs.writeFileSync(filePath, "hi kinshuk ");


fs.open(filePath, 'a', function(err, file) {
    if (err) throw err;
    console.log("File is created");
});
 
fs.readFile(filePath,'utf-8',(err,data)=>{
console.log(data)
})

fs.appendFile(filePath,' and how are you?',(err)=>{
    console.log("text has been updated")
})