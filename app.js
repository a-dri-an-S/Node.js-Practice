const http = require('http');

// importing express
const express = require('express');

const app = express();

// create server
const server = http.createServer(app);

server.listen(3000);

