angular.module('myDirectives', [])
.directive('superButton', function() {
  return {
    scope: {label: '=', callback: '&onClick'},
    replace: true,
    restrict: 'E',
    link: function(scope, element, attrs) {

    },
    template: '<div>' +
      '<div>{{label}}</div>' +
      '<button ng-click="callback()">Click me !</button>' +
      '</div>'
  };
});
