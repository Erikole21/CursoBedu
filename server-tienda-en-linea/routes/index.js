const express = require('express');
const router = express.Router();


// Add the required routes
router.use('/auth', require('./auth'));
router.use('/products', require('./products'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/reviews', require('./reviews'));
module.exports = router;