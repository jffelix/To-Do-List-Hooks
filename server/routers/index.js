const router = require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/items', controllers.getItems);
router.post('/items', controllers.postItem);
router.put('/items/:id', controllers.updateItem);
router.delete('/items/:id', controllers.deleteItem);

module.exports = router;