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

        window.scope = $scope;


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
      $scope.credentials =  {
        username: "",
        email: "",
        password :"",
        userPic : ""
      };
      $scope.createNewUser =  function() {
          console.log($scope.credentials);
          $http.post('http://localhost:7000/api/users', $scope.credentials)
          //todo, propaate an error to the UI when the user tries to register a 
          //non -unique name
          .error(function(err){
              console.log(err);
          })
          .success(function(data){
              console.log(data);
              authService.login($scope.credentials).success(function(data){
                  console.log(data);
                  console.log(JSON.stringify(data));

                  authService.setCurrentUser(data);

                  $location.path('/profile');
              });

          });

      };
    }]);



}(angular.module("dtpr.login", [
    'ui.router',
    //'authService'
])));



