// Node Imports
const path = require('path');

// imports
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// TEMPLATE ENGINES
// setting up template engine for pug
// app.set('view engine', 'pug');

// setting up template engine for express handlebars
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');

// Setting up template for EJs
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Found!"})
})

// create server
app.listen(3000);