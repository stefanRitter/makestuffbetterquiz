angular.module('app').controller('storyController', ['Story', '$routeParams', function (Story, $routeParams) {
  'use strict';
  var vm = this,
      name = $routeParams.name;

  vm.story = Story.get({name: name});
}]);
