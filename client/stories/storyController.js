angular.module('app').controller('storyController', ['Story', 'Question', '$routeParams', '$location', function (Story, Question, $routeParams, $location) {
  'use strict';
  var vm = this,
      name = $routeParams.name,
      index = $routeParams.index;

  vm.showQuestion = true;
  vm.showSuccess = false;

  Story.get({name: name}).$promise.then(function (data) {
    vm.story = data;
    
    if (!index) {
      $location.path('/stories/'+name+'/0');
    } else if (index === 'success') {
      vm.showSuccess = true;
    } else {
      vm.question = Question.get({id: vm.story.questions[index]});
    }

    vm.next = function () {
      var len = vm.story.questions.length,
          next = parseInt(index,10)+1;

      if (index === 'success') {
        $location.path('/');
      } else if (next >= len) {
        $location.path('/stories/'+name+'/success');
      } else {
        $location.path('/stories/'+name+'/'+next);
      }
    };

    vm.flip = function () {
      vm.showQuestion = false;
    };
  });
}]);
