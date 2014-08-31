angular.module('app').controller('storyController', ['Story', 'Question', '$routeParams', '$location', '$sce', function (Story, Question, $routeParams, $location, $sce) {
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
      vm.showQuestion = false;
      vm.showSuccess = true;
    } else {
      vm.question = Question.get({id: vm.story.questions[index]});
    }
  });

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

  vm.show = function (state) {
    switch (state) {
      case 'answer':
        return !vm.showQuestion && !vm.showSuccess;
      case 'question':
        return vm.showQuestion && !vm.showSuccess;
      case 'success':
        return !vm.showQuestion && vm.showSuccess;
    }
  };

  vm.safeHtml = function (text) {
    return $sce.trustAsHtml(text);
  };
}]);
