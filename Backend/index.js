//ทำการ import โมดูล Http
const http = require('http');
const host = 'localhost';
const port = 8000;


//กำหนด server 
const requirelistener = function (req, res) {
    res.writeHead ( 200);
    res.end('Hello World! This is My server\n');
   
}

//run server
const server = http.createServer(requirelistener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});