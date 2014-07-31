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

    app.controller('HeaderController', ['$scope','authService', function ($scope, authService) {

        var init = function() {
        };

        $scope.isLoggedIn = function(){
            return authService.isLoggedIn();
        };

        $scope.currentUser = authService.getCurrentUser();
          


        init();
    }]);

}(angular.module("dtpr.header", [
    'ui.router'
])));
