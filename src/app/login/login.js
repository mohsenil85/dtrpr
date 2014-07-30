(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginController',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });
    }]);

    app.controller('LoginController', ['$scope', function ($scope) {

        var init = function() {
        };

        init();
    }]);

}(angular.module("dtpr.login", [
    'ui.router'
])));