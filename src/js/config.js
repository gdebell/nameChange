(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .otherwise('/');
  }
})();
