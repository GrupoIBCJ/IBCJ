const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return;
  }

  if (connection) {
    connection.release();
    console.log('Conectado ao banco de dados');
  }
});

module.exports = pool.promise();
