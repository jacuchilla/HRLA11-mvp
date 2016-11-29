var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var beerListSchema = new Schema({
  id: String,
  name: String,
  ibu: String,
  abv: String,
  description: String
})


var Beer = mongoose.model('Beer', beerListSchema)

var addBeerToFavs = function(data) {
  Beer.find({ id: data.id}, function(err, beer) {
    console.log('AFGSFSDGER', beer.length)
    if(err) throw err
    else if (beer.length === 0) {
      var newBeer = new Beer({ id: data.id, name: data.name, ibu: data.ibu, abv: data.abv, description: data.description })
      newBeer.save(function(err, saved) {
        if(err) return console.log(err)
        console.log('just added the beer!!!', saved)
      })
    }
    else if (beer.length > 0) {
      console.log('this user already exists!')
    }
  })
}

var getFavList = function(callback) {
  console.log('triggered GETFAVLIST in models')
  Beer.find({}, function(err, beers) {
    console.log('GETFAVLIST data returned!!!! ', beers)
    callback(err, beers)
  })
}










module.exports = {
  Beer: Beer,
  addBeerToFavs: addBeerToFavs,
  getFavList: getFavList
}




