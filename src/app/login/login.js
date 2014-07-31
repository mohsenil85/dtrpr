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

    app.controller('LoginController', ['$scope', '$location',
                   'authService', 
                   function ($scope, $location, authService) {

        var init = function() {
        };
        $scope.credentials = {
          username : "",
          password : ""
        };
        $scope.login = function() {
          authService.login($scope.credentials).success(function(data){
              authService.setCurrentUser(data);

            $location.path('/profile');
          });

        };


        init();
    }]);



}(angular.module("dtpr.login", [
    'ui.router',
    //'authService'
])));



