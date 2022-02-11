// importing express
const express = require('express');

const app = express();

// middleware
app.use('/', (req, res, next) => {
    console.log('This always works!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add product" page!</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In a middleware!');
    res.send('<h1>Hello, from express!</h1>')
});

// create server
app.listen(3000)

