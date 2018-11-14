var express = require('express');
var router = express.Router();

var eurekaConfig = require('../config/eurekaConfig');

router.get('/', function (req, res, next) {

var instances = eurekaConfig.client.getInstancesByAppId('PKYC-PROFILE-VIEWER');

res.send(instances[0]);

});

module.exports = router;