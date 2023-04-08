const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const categoriasRoutes = require('./routes/categorias');
const itensRoutes = require('./routes/itens');

app.use('/itens', itensRoutes);
app.use('/categorias', categoriasRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
