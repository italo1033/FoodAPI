const express = require('express');
const router = express.Router();
const alimentoController = require('../controllers/alimentoController');

router.get('/', alimentoController.getAllAlimentos);
router.get('/:id', alimentoController.getAlimentoById);

module.exports = router;