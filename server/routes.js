const router = require('express').Router();
const { getActivities } = require('./controllers/amadeusRequests.js');

router.post('/activities', getActivities);

module.exports = router;
