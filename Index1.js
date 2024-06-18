const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/excel.txt`;

// Write to the file
fs.writeFileSync(filePath, "hi kinshuk ");

// Open the file in append mode
fs.open(filePath, 'a', function(err, file) {
    if (err) throw err;
    console.log("File is created");
});