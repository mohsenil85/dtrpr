(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile',
            views: {
                "main": {
                    controller: 'ProfileController',
                    templateUrl: 'profile/profile.tpl.html'
                }
            },
            data:{ pageTitle: 'Profile' }
        });
    }]);

    app.controller('ProfileController', ['$scope', function ($scope) {

        var init = function() {
        };

        init();
    }]);

}(angular.module("dtpr.profile", [
    'ui.router'
])));