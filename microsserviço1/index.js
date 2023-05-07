const express = require('express');
const cors = require('cors'); 
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const categorias = require('./routes/categorias');
const itens = require('./routes/itens');
const itensController = require('./controllers/itensController');
require('./eventBus');

app.use(express.json());
app.use(cors());

// Adicione as rotas do itens e categorias
app.use('/categorias', categorias);
app.use('/itens', itens);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Microsserviço1 rodando na porta 3000');
});
