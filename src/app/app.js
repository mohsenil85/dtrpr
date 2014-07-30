(function(app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.run(function () {});

    app.controller('AppController', ['$scope', function ($scope) {

    }]);

}(angular.module("dtpr", [
    'dtpr.home',
    'dtpr.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'dtpr.header',
    'dtpr.footer',
    'dtpr.login',
    'dtpr.profile',
    'dtpr.trips',
    'dtpr.newtrip',
])));
