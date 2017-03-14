const express = require('express');

const router = express.Router();

router.use('/favorites', require('./controllers/restaurants'));
router.use('/users', require('./controllers/users'));

module.exports = router;
