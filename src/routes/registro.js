const express = require('express');
const router = express.Router();
const registroControllers = require('../controllers/registroControllers')

router.get('/registro', registroControllers.registro);

module.exports = router;