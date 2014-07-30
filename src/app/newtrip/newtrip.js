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

        init();
    }]);

}(angular.module("dtpr.newtrip", [
    'ui.router'
])));