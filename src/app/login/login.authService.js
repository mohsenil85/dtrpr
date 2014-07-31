(function(app) {

    app.factory('dtpr.login.authService', function($http, $location){
      return{
        login: function(credentials){
          console.log(credentials);
        },
        logout: function(){
          console.log('logout');
        }
      };
    });

}(angular.module("dtpr.login.authService", [
    'ui.router'
])));
