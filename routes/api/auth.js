const passport = require('passport');
const router = require('express').Router();
const authController = require('../../controllers/authController');


// Universal Routes
router.route('/')
  .delete(authController.logout);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post((req, res, next) => { console.info('Before auth', req.body); next(); }, passport.authenticate('local'), (req, res) => {
    res.json(req.user);
  });

router.route('/logout')
  .delete(authController.logout);
  
  router.route('/session/:sid')
  .get(authController.validateSession);
  
  // router.route('/auth/github')
  //   .get(passport.authenticate('github'));
  
  // router.route('/auth/github/callback')
  //   .get(passport.authenticate('github', { successRedirect: '/secure', failureRedirect: '/login' }));
  
// General User Routes
router.route('/updateUser')
  .put((authController.updateUser))

// Entertainer Routes

router.route('/updateEntertainer')
  .put((authController.updateEntertainer))

// PromoterVendor Routes

router.route('/updatePromoterVendor')
  .put((authController.updatePromoterVendor))

// Event Routes
router.route('/createEvent')
.post((req, res, next) => { console.info('Before createEvent', req.body); next(); }, authController.createEvent, (req, res) => {
  res.json(req.event);
});

router.route('/updateEvent')
  .put((authController.updateEvent))

router.route('/search')
  .get(authController.search);

router.route('/searchEvents')
  .get(authController.searchEvents);

module.exports = router;

