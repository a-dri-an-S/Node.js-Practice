const http = require('http');

// importing express
const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello, from express!</h1>')
});

// create server
const server = http.createServer(app);

server.listen(3000);

