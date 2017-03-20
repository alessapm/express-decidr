const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/zip/:zip/:category', controller.index);
router.get('/:user_id', controller.show);
router.post('/:user_id', controller.create);

router.put('/:user_id/:restaurant_id', controller.update);
router.delete('/:user_id/:restaurant_id', controller.destroy);


module.exports = router;
