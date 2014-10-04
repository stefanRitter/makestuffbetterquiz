angular.module('app').controller('storiesController', ['Story', '$location', function (Story, $location) {
  'use strict';
  var vm = this;
  
  vm.admin = $location.path().indexOf('admin') > -1;
  vm.stories = Story.query();
  
  vm.storyLink = function (story) {
    var url = '/stories/' + story.name;
    if (vm.admin) { url = '/admin' + url + '/edit'; }
    return url;
  };
}]);
