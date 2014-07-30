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
            data:{ pageTitle: 'Newtrip' }
        });
    }]);

    app.controller('NewtripController', ['$scope', function ($scope) {

        var init = function() {
        };

        $scope.map = {
            center: {
                latitude: 44,
                longitude: 100
            },
            zoom : 8
        };

        init();
    }]);

}(angular.module("dtpr.newtrip", [
    'ui.router',
    'google-maps'
])));
