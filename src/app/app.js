(function(app) {

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }]);

  app.run(['$rootScope',
          '$location',
          'authService',
          function ($rootScope, $location, authService ) {

            var routesThatRequireAuth = ['/profile', '/trips', '/newTrip'];
            $rootScope.$on('$stateChangeStart', 
                           function(event,
                                    toState, 
                                    toParams,
                                    fromState,
                                    fromParams){
                                      if(toState.authenticate &&
                                         !authService.isLoggedIn()){
                                        $location.path('/login');
                                      event.preventDefault();
                                      }
                                    });

          }]);

          app.controller('AppController', ['$scope',  function ($scope) {

              
          }]);

}(angular.module("dtpr", [
  'mapController',
  'dtpr.home',
  'dtpr.about',
  'templates-app',
  'templates-common',
  'ui.router.state',
  'ui.router',
  'dtpr.header',
  'dtpr.footer',
  'dtpr.login',
  'authService',
  'dtpr.profile',
  'dtpr.trips',
  'dtpr.newtrip',
  'google-maps',
  'dtpr.howitworks',
])));
