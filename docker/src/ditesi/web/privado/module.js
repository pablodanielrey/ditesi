app = angular.module('MainApp', ['ui.router', 'ngResource', 'ngMaterial'])


app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .warnPalette('red')
    .accentPalette('cyan');
});


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/ditesi");

  // --- preload ----

  $stateProvider
  .state('ditesi', {
    url:'/ditesi',
    templateUrl: 'componentes/ditesi/index.html',
    controller:'DitesiCtrl'
  })
  .state('ditesi.inicio', {
    url:'/inicio',
    templateUrl: 'componentes/ditesi/templates/inicio.html',
  })

}]);


app.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
