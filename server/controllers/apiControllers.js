var request = require('request')
var models = require('../models/apiModels.js')


var getBeerList = function(req, res) {
  var params = req.body;
  console.log('These are the params in the post req ', params)
  request(`http://api.brewerydb.com/v2/beers/?key=f254ed0f86b207e099161d22ce179473&ibu=${params.ibu}&abv=${params.abv}&format=json`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      var beerList = JSON.parse(body).data;
      // console.log('heres the res from request body:  ', beerList)
      res.json(beerList);
    }
  })
}

var postFavBeerList = function(req, res) {
  //console.log('HERES THE REQ FAV DATA from Controllers!!! ', req.body.name)
  models.addBeerToFavs(req.body)
}

var getFavBeerList = function(req, res) {
  console.log('triggered GETFAVBEERLIST REQ')
  models.getFavList(function(err, data){
    res.send(data)
  })
}







module.exports = {
  getBeerList: getBeerList,
  postFavBeerList: postFavBeerList,
  getFavBeerList: getFavBeerList
}
