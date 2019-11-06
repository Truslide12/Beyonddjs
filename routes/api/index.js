const path = require('path');
const router = require('express').Router();
const authRoutes = require('./api/auth');
const htmlRoutes = require('./api/html');

// API Routes
router.use('/', authRoutes);
router.use('/', htmlRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

module.exports = router;