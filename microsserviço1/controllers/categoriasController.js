    const db = require('../db');

    exports.getCategories = async (req, res) => {
      const query = 'SELECT * FROM categorias';

      try {
        const [results] = await db.query(query);
        res.json(results);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).send('Erro ao buscar categorias');
      }
    };
