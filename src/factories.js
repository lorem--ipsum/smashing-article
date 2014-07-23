angular.module('factories', [])
.factory('chimp', ['$log', function($log) {
  return {
    ook: function() {
      $log.warn('Ook.');
    }
  };
}]);
