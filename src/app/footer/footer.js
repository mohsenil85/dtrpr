(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('footer', {
            url: '/footer',
            views: {
                "main": {
                    controller: 'FooterController',
                    templateUrl: 'footer/footer.tpl.html'
                }
            },
            data:{ pageTitle: 'Footer' }
        });
    }]);

    app.controller('FooterController', ['$scope', function ($scope) {

        var init = function() {

        };
        $scope.year = new Date().getFullYear();
        $scope.author = "lm";

        init();
    }]);

}(angular.module("dtpr.footer", [
    'ui.router'
])));
