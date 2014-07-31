(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('header', {
            url: '/header',
            views: {
                "main": {
                    controller: 'HeaderController',
                    templateUrl: 'header/header.tpl.html'
                }
            },
            data:{ pageTitle: 'Header' }
        });
    }]);

    app.controller('HeaderController', ['$scope', function ($scope) {

        var init = function() {
        };


        init();
    }]);

}(angular.module("dtpr.header", [
    'ui.router'
])));
