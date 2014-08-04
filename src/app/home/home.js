/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeController',
                    templateUrl: 'home/home.tpl.html'
                },
                "header": {
                    templateUrl: 'header/header.tpl.html'

                }

            },
            data:{ pageTitle: 'Home' }
        });
    }]);

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    app.controller('HomeController', ['$scope', function ($scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        };

        $scope.someVar = 'Things for Logan to do:';
        $scope.someList = [
            ' √ reimpl local login', 
            'fb login',
            'google login',
            '√ google maps api',
            '√  link search box to map',
            'make map expand to contian both markers',
            'add uspport for google directions',
            ' X file upload (pix)',
            ' possible just have link to pic?',
            ' √ ap stylings',
            'x combine backend and front end?',
            'migrate logos and stuff into assets',
            'create new trip from ui, save into db',
            'user profile',
            'save user into db',
            'user add/edit screen',
            'list all trips, filter them'
        ];
        $scope.someFunctionUsedByTheHomePage = function () {
            alert('Congratulations');
        };

        init();
    }]);

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("dtpr.home", [
    'ui.router'
])));
