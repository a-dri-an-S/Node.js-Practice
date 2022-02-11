const http = require('http');

//import Node module
const routes = require('./routes');

// create server
const server = http.createServer(routes);

server.listen(3000);

