const path = require('path');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../../utils/auth');

router.route('/register')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Register/index'));
  })

router.route('/login')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Login/index'));
  })

router.route('/dashboard') //need to change all secure.html to basic.html and create routes for 
  .get(auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/src/pages/Dashboard/index'));
  });

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });