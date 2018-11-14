var express = require('express')
var path = require('path')
var cors = require('cors')
var request = require('request')

var app = express()

app.use(cors())
app.options('*', cors())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './public')))

// Eureka config and routes

// var eurekaConfig = require('./config/eurekaConfig');
// var actuatorInfo = require('./routes/actuatorInfo');
// var actuatorHealth = require('./routes/actuatorHealth');
// var eurekaStop = require('./routes/eurekaStop');
// var instances = require('./routes/instances');

// Eureka start

// eurekaConfig.client.logger.level('debug');
// eurekaConfig.client.start(function (error) {
// console.log(error || 'complete');
// });

// routes Eureka

// app.use('/actuator/info', actuatorInfo);
// app.use('/actuator/health', actuatorHealth);
// app.use('/eurekaStartStop', eurekaStop);
// app.use('/instances', instances);

// App routes

var getList = require('./routes/getList')

app.use('/api/getList/', getList)

module.exports = app