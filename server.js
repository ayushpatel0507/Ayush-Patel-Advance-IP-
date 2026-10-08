const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req,res) => {
    let method = req.method + " ";
    let url = req.url + "\n\n";
    let headers = JSON.stringify(req.headers, null, 4);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(method);
    res.write(url);
    res.write(headers);
    res.end();
     
     app.get('/api/getName', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.json({ name: "Bhaijaan's Farmhouse"});
                });

      app.get('/api/getImage', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.sendFile('/images/sallu.jpg');
                });          
    


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
śśś