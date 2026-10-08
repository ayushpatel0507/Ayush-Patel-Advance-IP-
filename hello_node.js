const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    let filepath = path.join(__dirname, "hello.html")
    res.writeHead(200, {'Content-Type': "text/html"});
    fs.createReadStream(filepath).pipe(res);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});