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

    app.controller('NewtripController',   ['$scope', 'mapController',  function ($scope, mapController) {

        var init = function() {
        };

        $scope.map2 = {
            center: {
                latitude: 45,
                longitude: -122
            },
            zoom : 8
        };

        $scope.map1 = {
            center: {
                latitude: 45,
                longitude: -122
            },
            zoom : 8
        };


        init();
    }]);

}(angular.module("dtpr.newtrip", [
    'ui.router',
    'google-maps',
])));
