angular.module('app').controller('storiesController', ['Story', function (Story) {
  'use strict';
  var vm = this;

  vm.stories = Story.query();
}]);
