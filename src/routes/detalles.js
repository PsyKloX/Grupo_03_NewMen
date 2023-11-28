const express = require('express');
const router = express.Router();
const detallesControllers = require('../controllers/detallesControllers')

router.get('/detallesproducto', detallesControllers.detallesproducto);

module.exports = router;