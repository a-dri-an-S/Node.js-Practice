// Node Imports
const path = require('path');

// imports
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

// configs
// require('dotenv').config();

const app = express();

// Setting up template for EJs
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products')
    .then(result => {
        console.log(result[0], result[1]);
    })
    .catch(err => {
        console.log(err);
    });

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// create server
app.listen(3000);