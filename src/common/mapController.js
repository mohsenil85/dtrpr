(function(app) {

    app.factory('mapController', function(){
      return {
          initialize: function(){
              console.log('mapctrl');
          },
          
          map : {
            center: {
                latitude: 45,
                longitude: -122
            },
            zoom : 8
        }
      };
    });

}(angular.module("mapController", [
    'ui.router'
])));
