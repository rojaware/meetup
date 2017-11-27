// Dependencies
var express = require('express');
var router = express.Router();

const GroupController = require('../controllers/groupController');

// Routes
router.get('/groups', GroupController.create);
router.get('/groups/:id', GroupController.update);
router.get('/groups/:id', GroupController.remove);
router.get('/groups', GroupController.index);

// Return router
module.exports = router;