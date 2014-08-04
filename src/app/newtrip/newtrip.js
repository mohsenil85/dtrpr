(function(app) {

  app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('newtrip', {
      url: '/newtrip',
      views: {
        "main": {
          controller: 'NewtripController',
          templateUrl: 'newtrip/newtrip.tpl.html'
        }
      },
      data:{ pageTitle: 'Newtrip' },
      authenticate: true
    });
  }]);

  app.controller('NewtripController', [
    '$scope', 
    '$window',
    '$q',
    '$timeout',
    'mapStyle',
    function ($scope,  $window, $q, $timeout,  mapStyle) {

      $scope.icon="../../assets/img/shitty.png";
      var init = function() {
      };
      var defered = $q.defer();
      $window.navigator.geolocation.getCurrentPosition(function(data){
        defered.resolve(data);
      });

      defered.promise.then(function(data){
        $scope.map2.center.latitude = data.coords.latitude;
        $scope.map2.center.longitude = data.coords.longitude;
      });

      $scope.mapOptions = {
        disableDefaultUI: true,
        styles: mapStyle
      };
      $scope.map2 = {
        center: {
          latitude: 100,
          longitude: 100
        },
        zoom : 13
      };

      window.scope = $scope;

      $scope.destinationInput= "";
      $scope.inputOptions = {
      };
      $scope.origCoords = {};
      $scope.origInput = function(){
        $timeout(function(){
          
          $scope.origCoords.latitude =  $scope.origLatLong.k;
          $scope.origCoords.longitude = $scope.origLatLong.B;

        },60);
      };
      
      $scope.destCoords = {};
      $scope.destInput = function(){
        $timeout(function(){
          
          $scope.destCoords.latitude =  $scope.destLatLong.k;
          $scope.destCoords.longitude = $scope.destLatLong.B;

        },60);
      };
      $scope.destLatLong = "";
      $scope.origLatLong = "";


      init();
    }]);


}(angular.module("dtpr.newtrip", [
  'ui.router',
  'google-maps',
  'mapStyle',
  'ngAutocomplete',
])));
