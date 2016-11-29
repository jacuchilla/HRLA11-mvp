angular.module('beerGarden.form', [])

.controller('BeerForm', function($scope, $location, Services) {
  $scope.data;
  $scope.searchBeers = function(data) {
    // console.log('heres the data from form!  ',data);
    Services.makeBeerListCall(data)
    .then(function() {
      return $location.path('/beerList')
    })
    .catch(function(error) {
      console.log(error)
    })
  }
})