var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var apiControllers = require('./controllers/apiControllers.js')
var mongoose = require('mongoose')


var app = express()

var port = 3000;

mongoose.connect('mongodb://test:1234@ds163377.mlab.com:63377/nodemvp', function(err) {
  if(err) throw err;
  console.log('were connected to the db fam!')
})


// Middleware: Parsing incoming
app.use(bodyParser.json())
app.use(morgan('dev'))

// This is allowing me to load up the index page using middleware...not sure if this is the right way to do things
app.use(express.static(path.join(__dirname, '../client')))

app.post('/api/beerList', apiControllers.getBeerList)

app.post('/api/favBeerList', apiControllers.postFavBeerList)

app.get('/api/favBeerList', apiControllers.getFavBeerList)




app.listen(port, function() {
  console.log('Its lit on port: http://127.0.0.1:',port)
})