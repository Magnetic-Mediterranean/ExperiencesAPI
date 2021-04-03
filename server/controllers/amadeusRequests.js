const amadeus = require('../connectionAmadeus.js');

module.exports = {
  getActivities: (req, res) => {
    amadeus.shopping.activities.get({
      latitude: 41.397158,
      longitude: 2.160873,
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error.code);
      });
  },
};
