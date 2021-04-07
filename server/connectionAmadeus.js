const Amadeus = require('amadeus');

const { key, secret } = require('../sensitive/amadeusAuthentication.js');

module.exports = new Amadeus({
  clientId: key,
  clientSecret: secret,
});
