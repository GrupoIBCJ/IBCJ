const express = require('express');
const app = express();
const mapsRoutes = require('./routes/mapsroutes');

app.use('/lojas-proximas', mapsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Microsserviço 2 está rodando na porta ${PORT}`);
});
