const passport = require('passport');
const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/')
  .delete(authController.logout);

router.route('/register')
  .post(authController.register);

router.route('/login') //need to add different routes for each role
  .post(passport.authenticate('local', { successRedirect: '/BasicUser', failureRedirect: '/login' }));

router.route('/logout')
  .delete(authController.logout);

router.route('/session/:sid')
  .get(authController.validateSession);

// add router.route('/session/:role) - may be wrong
// .get(authController.validateRole);

// router.route('/auth/github')
//   .get(passport.authenticate('github'));

// router.route('/auth/github/callback')
//   .get(passport.authenticate('github', { successRedirect: '/secure', failureRedirect: '/login' }));

module.exports = router;

