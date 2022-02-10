const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // routing a request
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }

    // redirect a request
    if (url === "/message" && method === "POST") {
        fs.writeFileSync('message.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // sending a response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

