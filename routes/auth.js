const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
    '/login',
    [
        check('email')
            .normalizeEmail()
            .isEmail()
            .withMessage('Please enter a valid email'),
        body(
            'password',
            'Please enter a password that has numbers, letters and min length of 6 characters'
        )
            .trim()
            .isLength({ min: 6 })
            .isAlphanumeric()
    ],
    authController.postLogin);

router.post(
    '/signup',
    [
        check('email')
            .normalizeEmail()
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, { req }) => {
                return User.findOne({ email: value })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('Email already exists, please choose a different email!');
                        }
                    });
            }),
        body(
            'password',
            'Please enter a password that has numbers, letters and min length of 6 characters'
            )
            .trim()
            .isLength({ min: 6 })
            .isAlphanumeric(),
        body('confirmPassword')
            .trim()
            .custom((value, { req }) => {
                console.log(value, req.body.password)
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match!')
                }
                return true;
            })
    ],
    authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;