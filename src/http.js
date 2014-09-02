angular.module('factories_2', [])
.factory('chimp', ['$http', function($http) {
  return {
    sendMessage: function() {
      $http.post('http://chimps.org/messages', {message: 'Ook.'});
    }
  };
}]);
