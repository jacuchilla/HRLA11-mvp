angular.module('beerGarden', [
  "beerGarden.form",
  "beerGarden.beerList",
  "beerGarden.favBeerList",
  "beerGarden.services",
  "ngRoute"
  ])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/app/form/form.html',
    controller: 'BeerForm'
  })
  .when('/beerList', {
    templateUrl: '/app/beerList/beerList.html',
    controller: 'BeerList'
  })
  .when('/favBeerList', {
    templateUrl: '/app/favBeerList/favBeerList.html',
    controller: 'FavBeerList'
  })
  .otherwise({
    redirectTo: '/'
  })
})

