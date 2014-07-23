angular.module('factories_2', [])
.factory('chimp', ['$log', '$http', function($log, $http) {
  return {
    ook: function() {
      $log.warn('Ook.');
    },
    sendMessage: function() {
      $http.post('http://chimps.org/messages', {message: 'Ook.'});
    }
  };
}]);
