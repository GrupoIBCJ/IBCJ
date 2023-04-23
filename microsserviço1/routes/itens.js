const express = require('express');
const router = express.Router();
const itensController = require('../controllers/itensController');

// Rota para buscar todos os itens
router.get('/', itensController.getItens);

// Rota para buscar itens por categoria
router.get('/categoria/:categoria_id', itensController.getItensByCategory);

module.exports = router;
