angular.module('beerGarden.services', [])

.factory('Services', function($http) {
  var beerList;
  var favList;

  var makeBeerListCall = function(data) {
    return $http({
      method: 'POST',
      url: '/api/beerList',
      data: data
    })
    .then(function(result) {
      beerList = result.data
      // console.log('heres the data from post inside SERVICESS ', beerList)
    })
  }

  var grabBeerList = function() {
    return beerList;
  }

  var saveToFavs = function(beer) {
    return $http({
      method: 'POST',
      url: '/api/favBeerList',
      data: beer
    })
    .then(function(result) {
      console.log('yes')
    })

  }

  var callFavList = function() {
    return $http({
      method: 'GET',
      url: '/api/favBeerList'
    })
    .then(function(result) {
      console.log('all good')
      favList = result.data
    })
  }

  var grabFavBeerList = function() {
    return favList;
  }

  return {
    makeBeerListCall: makeBeerListCall,
    grabBeerList: grabBeerList,
    saveToFavs: saveToFavs,
    grabFavBeerList: grabFavBeerList,
    callFavList: callFavList
  }

})