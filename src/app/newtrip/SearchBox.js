(function(app) {

  app.directive('searchBox', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });

   

}(angular.module("dtpr.newtrip", [
    'ui.router',
    'google-maps'
])));
