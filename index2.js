const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  res.write("Hi Kinshuk");
  res.end();
}).listen(3001);