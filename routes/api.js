// Dependencies
var express = require('express');
var router = express.Router();

const GroupController = require('../controllers/groupController');

// Routes
router.post('/groups', GroupController.create);
router.put('/groups/:id', GroupController.update);
router.delete('/groups/:id', GroupController.remove);
router.get('/groups', GroupController.index);

// Return router
module.exports = router;