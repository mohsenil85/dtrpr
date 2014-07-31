(function(app) {

    app.factory('authService', function($http, sessionService ){
    var cacheSession = function(){
      sessionService.set('authenticated', true);
    };
    var uncacheSession = function(){
      sessionService.unset('authenticated');
    };
    var currentUser = {};
      return {
        login: function(credentials){
          var login =  $http.post('http://localhost:7000/api/auth', credentials);
          login.success(cacheSession);
          return login;
        },
        logout: function(){
          var logout =  $http.delete('http://localhost:7000/api/auth');
          logout.success(uncacheSession);
        },
        isLoggedIn: function(){
          return sessionService.get('authenticated');
        },
        setCurrentUser: function(data){
            currentUser = data;
        },
        getCurrentUser: function(){
            return currentUser;
        }
      };
    });

}(angular.module("authService", [
    'ui.router',
    'sessionService'
])));
