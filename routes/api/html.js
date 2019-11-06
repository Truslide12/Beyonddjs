const path = require('path');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../../utils/auth');

router.route('/register')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
  })

router.route('/login')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  })

router.route('/basic.html') //need to change all secure.html to basic.html and create routes for 
  .get(auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/basic.html'));
  });

  router.route('/promotorVendor.html') //need to change all secure.html to basic.html and create routes for 
  .get(auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/promotorVendor.html'));
  });

  router.route('/entertainer.html') //need to change all secure.html to basic.html and create routes for 
  .get(auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/entertainer.html'));
  });

  router.route('/admin.html') //need to change all secure.html to basic.html and create routes for 
  .get(auth.isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
  });

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router;
