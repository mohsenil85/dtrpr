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
        'mapController',
        '$window',
        '$q',
        function ($scope, mapController, $window, $q) {

            var init = function() {
            };
            var defered = $q.defer();
            $window.navigator.geolocation.getCurrentPosition(function(data){
                defered.resolve(data);
            });

            defered.promise.then(function(data){
                console.log(data.coords.latitude);
                console.log($scope.map2.center.latitude);
                $scope.map2.center.latitude = data.coords.latitude;
                $scope.map2.center.longitude = data.coords.longitude;
            });

            $scope.map2 = {
                center: {
                    latitude: 100,
                    longitude: 100
                },
                zoom : 13
                };

            window.scope = $scope;

            $scope.map1 = {
                center: {
                    latitude: 0,
                    longitude: 0
                },
                zoom : 8
            };


            init();
        }]);

}(angular.module("dtpr.newtrip", [
    'ui.router',
    'google-maps',
])));
