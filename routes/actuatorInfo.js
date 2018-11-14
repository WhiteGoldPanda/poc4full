var express = require('express');
var router = express.Router();

var eurekaConfig = require('../config/eurekaConfig');

/* GET users listing. */
router.get('/', function (req, res, next) {

var instances = eurekaConfig.client.getInstancesByAppId('PKYC-PROFILE-VIEWER');
res.send(instances);
});

module.exports = router;