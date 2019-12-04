const passport = require('passport');
const router = require('express').Router();
const authController = require('../../controllers/authController');


// Universal Routes
router.route('/')
  .delete(authController.logout);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    res.json(req.user);
  });

router.route('/logout')
  .delete(authController.logout);

router.route('/session/')
  .get(authController.validateSession);

router.route('/updateAvailability/')
  .post(authController.updateAvailability)

router.route('/updateUser/')
  .post((authController.updateUser))

// router.route('/auth/github')
//   .get(passport.authenticate('github'));

// router.route('/auth/github/callback')
//   .get(passport.authenticate('github', { successRedirect: '/secure', failureRedirect: '/login' }));

// Event Routes
router.route('/createEvent')
  .post((req, res, next) => { console.info('Before createEvent', req.body); next(); }, authController.createEvent);

router.route('/updateEvent/:id')
  .post((authController.updateEvent))

router.route('/search')
  .get(authController.search);

router.route('/searchEvents')
  .get(authController.searchEvents);

router.route('/myEvents')
  .get(authController.myEvents);

module.exports = router;

