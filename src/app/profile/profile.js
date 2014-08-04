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
            data:{ pageTitle: 'Profile' },
            authenticate: true
        });
    }]);

    app.controller('ProfileController',  ['$scope', '$location', 'authService', 
                   function ($scope, $location, authService) {

        var init = function() {
            if (authService.isLoggedIn()){
                console.log('notLoggedIn');
            }
        };
    

        window.scope = $scope;

        console.log(authService.isLoggedIn());
        $scope.currentUser = authService.getCurrentUser();
        

        $scope.me = function(){
            console.log($scope.currentUser);
        };

        init();
    }]);

}(angular.module("dtpr.profile", [
    'ui.router',
])));
