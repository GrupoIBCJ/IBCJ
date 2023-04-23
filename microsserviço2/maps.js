const config = require('./config');
const googleMapsClient = require('@google/maps').createClient({
  key: config.googleMapsApiKey,
  Promise: Promise,
});

module.exports = googleMapsClient;
    