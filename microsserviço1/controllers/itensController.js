const db = require('../db');

exports.getItens = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM itens');
    console.log('Resultados:', results); // Adicione esta linha
    res.status(200).send(results);
  } catch (error) {
    console.error('Erro ao buscar itens:', error); // Atualize esta linha
    res.status(500).send('Erro ao buscar itens');
  }
};

exports.getItensByCategory = async (req, res) => {
  const categoria_id = req.params.categoria_id;
  try {
    const [results] = await db.query('SELECT * FROM itens WHERE categoria_id = ?', [categoria_id]);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send('Erro ao buscar itens por categoria');
  }
};

exports.getItensBySearchTerm = async (req, res) => {
  const searchTerm = req.query.term;
  try {
    const [results] = await db.query('SELECT * FROM itens WHERE nome LIKE ?', [`%${searchTerm}%`]);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send('Erro ao buscar itens por termo de pesquisa');
  }
};
