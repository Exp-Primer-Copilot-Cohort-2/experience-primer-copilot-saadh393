// Create web Server
// 1. Create a web server
// 2. When a request is made to the server, the server should respond with the text "Hello World"
// 3. The server should listen on port 3000

const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});