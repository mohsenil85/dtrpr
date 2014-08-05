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
        })
        .state('login.new', {
            url: '',
            controller: 'SignupController',
            templateUrl: 'login/login.new.tpl.html'
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
            console.log(data);
              authService.setCurrentUser(data);

            $location.path('/profile');
          });
        };


        init();
    }]);

    app.controller('SignupController', [
      '$scope', '$http', '$location', 'authService', 
      function($scope, $http, $location, authService){
      window.scope = $scope;
      $scope.newUser =  {
        name: "",
        email: "",
        password :"",
        picture : ""
      };
      $scope.createNewUser =  function() {
        $http.post('http://localhost:7000/api/users', $scope.newUser)
          .success(function(data){
            console.log(data);


            //$location.path('/profile');
            
          });

      };
    }]);



}(angular.module("dtpr.login", [
    'ui.router',
    //'authService'
])));



