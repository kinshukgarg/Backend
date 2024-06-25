const fs = require('fs');
const http = require('http');

http.createServer((req, resp) => {
    if (req.url === '/api') {
        fs.readFile(`${__dirname}/api.html`, "utf-8", (err, data) => {
            if (err) {
                resp.end("Internal Server Error");
            } else {
                resp.end(data);
            }
        });
    } else {
        resp.end("Not Found");
    }
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});