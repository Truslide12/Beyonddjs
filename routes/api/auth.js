const passport = require('passport');
const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/')
  .delete(authController.logout);

router.route('/register')
  .post(authController.register);

router.route('/login') //need to add different routes for each role
  .post((req, res, next) => { console.info('Before auth', req.body); next(); }, passport.authenticate('local'), (req, res) => {
    res.json(req.user);
});

router.route('/logout')
  .delete(authController.logout);

router.route('/session/:sid')
  .get(authController.validateSession);

router.route('/updateUser')
  .put((authController.updateUser))

router.route('/createEvent')
  .get(authController.createEvent);

router.route('/search')
.get(authController.search);

router.route('/searchEvents')
.get(authController.searchEvents);

// router.route('/auth/github')
//   .get(passport.authenticate('github'));

// router.route('/auth/github/callback')
//   .get(passport.authenticate('github', { successRedirect: '/secure', failureRedirect: '/login' }));

module.exports = router;

