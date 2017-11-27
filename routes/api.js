// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/products', function(req, res) {
   res.send('api works!');
});

// Return router
module.exports = router;