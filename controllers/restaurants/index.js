const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/:user_id', controller.show);
router.post('/:user_id', controller.create);
router.delete('/:user_id/:restaurant_id')

module.exports = router;
