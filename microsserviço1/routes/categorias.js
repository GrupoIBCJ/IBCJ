const db = require('../db');
const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');

router.get('/', categoriasController.getCategories);
  
router.get('/buscar', (req, res) => {
  const { nome, categoria, preco } = req.query;

  const sql = `
    SELECT * FROM categorias
    WHERE (nome LIKE ? OR ? IS NULL)
    AND (categoria = ? OR ? IS NULL)
    AND (preco <= ? OR ? IS NULL)
  `;

  db.query(sql, [`%${nome}%`, nome, categoria, categoria, preco, preco], (error, results) => {
    if (error) {
      console.error('Erro ao buscar instrumentos e equipamentos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
