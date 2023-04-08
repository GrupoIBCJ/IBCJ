const mysql = require('mysql');
const config = require('../config');

function getConnection() {
    return mysql.createConnection(config.db);
  }

  exports.getCategories = (req, res) => {
    const connection = getConnection();
    connection.query('SELECT * FROM categorias', (error, results) => {
      if (error) {
        res.status(500).send('Erro ao buscar categorias');
      } else {
        res.status(200).send(results);
      }
      connection.end();
    });
  };
      