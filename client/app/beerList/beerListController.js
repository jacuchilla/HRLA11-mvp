angular.module('beerGarden.beerList', [])

.controller('BeerList', function($scope, Services) {
  $scope.beerList = Services.grabBeerList()
})