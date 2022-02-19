const User = require('../models/user');

require('dotenv').config();

exports.getLogin = (req, res, next) => {
    // const loggedIn = req.get('Cookie').split(';')[2].split("=")[1];
    console.log(req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
}

exports.postLogin = (req, res, next) => {
    User.findById(process.env.USER_ID)
    .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user
            res.redirect('/');
        })
        .catch(err => console.log(err));
}
