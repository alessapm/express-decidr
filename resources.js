const express = require('express');

const router = express.Router();

router.use('/favorites', require('./controllers/restaurants'));

module.exports = router;
