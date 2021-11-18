const router = require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/items', controllers.getItems);
router.post('/items', controllers.postItem);

module.exports = router;