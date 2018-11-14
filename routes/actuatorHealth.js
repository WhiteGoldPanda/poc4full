var express = require('express');
var router = express.Router();

/* GET Eureka health status */
router.get('/', function (req, res, next) {
res.json({ 'status': 'UP' });
});

module.exports = router;