var app = require('./app.js')

app.set('port', process.env.PORT || 5005)

var server = app.listen(app.get('port'), () => {
console.log(`Server is running on ${server.address().port}`)
})