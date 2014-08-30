angular.module('app').controller('headerController', ['$location', '$window', function ($location, $window) {
  'use strict';

  var vm = this;
  vm.hideOn = function () {
    for (var i = 0, len = arguments.length; i < len; i++) {
      if (arguments[i] === $location.path()) {
        return true;
      }
    }
  };

  vm.back = function () {
    $window.history.back();
  };
}]);
