angular.module('app').controller('storyController', ['Story', '$routeParams', '$location', function (Story, $routeParams, $location) {
  'use strict';
  var vm = this,
      name = $routeParams.name,
      index = $routeParams.index;

  vm.story = Story.get({name: name});

  if (!index) {
    $location.path('/stories/'+name+'/0');
  }
}]);
