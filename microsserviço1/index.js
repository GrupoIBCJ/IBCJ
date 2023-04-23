const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const categorias = require('./routes/categorias');
const itens = require('./routes/itens');

app.use('/categorias', require('./routes/categorias'));

app.use('/itens', require('./routes/itens'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
