angular.module('app').controller('editStoryController', ['Story', '$location', '$routeParams', function (Story, $location, $routeParams) {
  'use strict';
  var vm = this,
      name = $routeParams.name;

  if (name === 'new') {
    vm.story = new Story();
  } else {
    vm.story = Story.get({name: name});
  }
}]);
