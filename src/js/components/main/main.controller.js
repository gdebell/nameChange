(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';

    var map = new google.maps.Map(document.getElementById('map_div'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
    });


  }
})();
