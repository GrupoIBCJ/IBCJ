const mapsClient = require('../maps');



exports.getNearbyStores = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const response = await mapsClient.placesNearby({
      location: [latitude, longitude],
      radius: 5000,
      type: 'store',
    }).asPromise();

    res.json(response.json.results);
  } catch (error) {
    console.error('Erro ao buscar lojas próximas:', error);
    res.status(500).send('Erro ao buscar lojas próximas');
  }
};
