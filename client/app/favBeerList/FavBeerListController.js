angular.module('beerGarden.favBeerList', [])

.controller('FavBeerList', function($scope, Services) {
  $scope.resetBeerList = function() {
    Services.callFavList()
    .then(function(){
      $scope.favBeerList = Services.grabFavBeerList()
    })
  }
  $scope.resetBeerList();

})