(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('trips', {
            url: '/trips',
            views: {
                "main": {
                    controller: 'TripsController',
                    templateUrl: 'trips/trips.tpl.html'
                }
            },
            data:{ pageTitle: 'Trips' },
            authenticate: true
        });
    }]);

    app.controller('TripsController', ['$scope', function ($scope) {

        var init = function() {
        };

        init();
    }]);

}(angular.module("dtpr.trips", [
    'ui.router'
])));
