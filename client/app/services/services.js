angular.module('beerGarden.services', [])

.factory('Services', function($http) {
  var beerList;

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

  return {
    makeBeerListCall: makeBeerListCall,
    grabBeerList: grabBeerList
  }

})