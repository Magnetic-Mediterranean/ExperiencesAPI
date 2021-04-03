const router = require('express').Router();
const { getActivities } = require('./controllers/amadeusRequests.js');

router.get('/activities', getActivities);

module.exports = router;
