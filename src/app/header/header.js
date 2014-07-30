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

    app.controller('HeaderController', ['$scope', function ($scope) {

        var init = function() {
            console.log(this);
        };

        window.scope = $scope;

        console.log('100101');
        $scope.foo = 'foo';
        init();
    }]);

}(angular.module("dtpr.header", [
    'ui.router'
])));
