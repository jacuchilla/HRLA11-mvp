angular.module('beerGarden', [
  "beerGarden.form",
  "beerGarden.beerList",
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
  .otherwise({
    redirectTo: '/'
  })
})

