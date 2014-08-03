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
      
      $scope.destCoords = {};
      $scope.getInput = function(){
        $timeout(function(){
          
          $scope.destCoords.latitude =  $scope.destLatLong.k;
          $scope.destCoords.longitude = $scope.destLatLong.B;
          console.log($scope.destCoords);

        },60);
      };
      /*

      $scope.newMarker = function(place){
        var marker = new google.maps.Marker({
          map: $scope.map2,
          position: place
        }) ;
      };
   */
      $scope.destLatLong = "";


      init();
    }]);


}(angular.module("dtpr.newtrip", [
  'ui.router',
  'google-maps',
  'mapStyle',
  'ngAutocomplete',
])));
