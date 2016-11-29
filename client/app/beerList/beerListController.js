angular.module('beerGarden.beerList', [])

.controller('BeerList', function($scope, Services) {
  $scope.beerList = Services.grabBeerList()
  $scope.saveBeer = function(beer) {
    // console.log('YOOOO HERES THE DATA ', beer.name)
    Services.saveToFavs(beer)
    console.log('running next')
    Services.callFavList()
  }
})