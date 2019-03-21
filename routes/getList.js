var express = require('express')
var router = express.Router()
var request = require('request')

// var eurekaConfig = require('../config/eurekaConfig')

router.get('/:name', function (req, res, next) {
// PKYC-MONGO-API url from discovery service
// var instances = eurekaConfig.client.getInstancesByAppId('PKYC-MONGO-API');
// var url = instances[0].hostName

// Direct url to PKYC-MONGO-API
var url = ""

var options = {
method: 'GET',
url: ` http://${url}:80/api/v1/erds?legalName=${req.params.name}`
,
headers: {
'cache-control': 'no-cache'
}
}

request(options, function (error, response, body) {
if (error) throw new Error(error)
res.send(body)
})
})

module.exports = router
