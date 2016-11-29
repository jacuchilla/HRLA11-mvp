var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var apiControllers = require('./controllers/apiControllers.js')


var app = express()

var port = 3000;

// Middleware: Parsing incoming
app.use(bodyParser.json())
app.use(morgan('dev'))

// This is allowing me to load up the index page using middleware...not sure if this is the right way to do things
app.use(express.static(path.join(__dirname, '../client')))

app.post('/api/beerList', apiControllers.getBeerList)





app.listen(port, function() {
  console.log('Its lit on port: http://127.0.0.1:',port)
})