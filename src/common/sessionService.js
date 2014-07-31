(function(app) {

    app.factory('sessionService', function(){
      return {
        get: function(key){
          return sessionStorage.getItem(key);
        },
        set: function(key, value){
          return sessionStorage.setItem(key, value);

        },
        unset: function(key){
          return sessionStorage.removeItem(key);
        }
      };
    });

}(angular.module("sessionService", [
    'ui.router'
])));
