angular.module('myProviders', [])

.provider('coffeeMaker', function() {
  var useFrenchPress = false;
  this.useFrenchPress = function(value) {
    if (value !== undefined) {
      useFrenchPress  = !!value;
    }

    return useFrenchPress;
  };

  this.$get = function () {
    return {
      brew: function() {
        return useFrenchPress ? 'Le café.' : 'A coffee.';
      }
    };
  };
});
