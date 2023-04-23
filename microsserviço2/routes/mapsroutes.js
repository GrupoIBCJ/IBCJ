const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/mapscontroller');


router.get('/', mapsController.getNearbyStores);

module.exports = router;
