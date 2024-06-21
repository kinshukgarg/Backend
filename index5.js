const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    if (req.url === "/") {
        resp.end("Welcome");
    } else if (req.url === "/home") {
        fs.readFilesync(`${__dirname}/index.html`, "utf-8", (err, data) => {
            if (err) {
                resp.end("Internal Server Error");
            } else {
                resp.end(data);
            }
        });
    } else if (req.url === "/contact") {
        fs.readFilesync(`${__dirname}/Contact.html`, "utf-8", (err, data) => {
            if (err) {
                resp.end("Internal Server Error");
            } else {
                resp.end(data);
            }
        });
    } else if (req.url === "/api") {
        fs.readFilesync(`${__dirname}/fetchapi.html`, "utf-8", (err, data) => {
            if (err) {
                resp.end("Internal Server Error");
            } else {
                resp.end(data);
            }
        });
    } else {
        resp.end("Not Found");
    }
}).listen(4000, () => {
    console.log("Server is listening on port 4000");
});
