const router = require('express').Router();
const authRoutes = require('./auth');
// const htmlRoutes = require('./html')

// Auth routes
router.use('/auth', authRoutes);
// router.use('/html', htmlRoutes);

module.exports = router;