(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('howitworks', {
            url: '/howitworks',
            views: {
                "main": {
                    controller: 'HowitworksController',
                    templateUrl: 'howitworks/howitworks.tpl.html'
                }
            },
            data:{ pageTitle: 'Howitworks' }
        });
    }]);

    app.controller('HowitworksController', ['$scope', function ($scope) {

        var init = function() {
        };

        init();
    }]);

}(angular.module("dtpr.howitworks", [
    'ui.router'
])));
