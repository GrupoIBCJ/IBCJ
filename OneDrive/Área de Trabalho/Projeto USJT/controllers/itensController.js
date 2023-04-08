const db = require('../db');

exports.getItens = (req, res) => {
  db.query('SELECT * FROM itens', (error, results) => {
    if (error) {
      res.status(500).send('Erro ao buscar itens');
    } else {
      res.status(200).send(results);
    }
  });
};

exports.getItensByCategory = (req, res) => {
  const categoria_id = req.params.categoria_id;
  db.query('SELECT * FROM itens WHERE categoria_id = ?', [categoria_id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao buscar itens por categoria');
    } else {
      res.status(200).send(results);
    }
  });
};
