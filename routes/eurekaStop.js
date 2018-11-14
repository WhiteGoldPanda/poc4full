var express = require('express');
var router = express.Router();

var eurekaConfig = require('../config/eurekaConfig');

// Stop Eureka
router.get('/', function (req, res, next) {

eurekaConfig.client.stop();
res.send('Eureka client application stoped!!')

});

module.exports = router;