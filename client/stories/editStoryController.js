angular.module('app').controller('editStoryController', ['Story', 'Question', '$location', '$routeParams', function (Story, Question, $location, $routeParams) {
  'use strict';
  var vm = this,
      name = $routeParams.name;
  
  vm.questions = Question.query();
  vm.selectedQuestions = [];

  vm.save = function () {
    vm.story.$save(function (data) {
      console.log(data);
      $location.path('/admin/stories');
     });
  };

  vm.addQuestion = function () {
    vm.story.questions.push(vm.nextQuestion);
    vm.questions.forEach(function (e) {
      if (e._id === vm.nextQuestion) {
        vm.selectedQuestions.push(e);
      }
    });
  };

  vm.removeQuestion = function ($index, question) {
    vm.selectedQuestions.splice($index, 1);
    
    var index = -1;
    vm.story.questions.forEach(function (e, i) {
      if (e._id === question._id) {
        index = i;
      }
    });
    if (index > -1) { vm.story.questions.splice(index, 1); }
  };


  if (name === 'new') {
    vm.story = new Story();
    vm.story.questions = [];
  } else {
    vm.story = Story.get({name: name}).$promise.then(function (data) {
      vm.story = data;
      vm.story.questions = vm.story.questions || [];
      vm.story.questions.forEach(function (id) {
        vm.questions.forEach(function (e) {
          if (e._id === id) {
            vm.selectedQuestions.push(e);
          }
        });
      });
    });
  }
}]);
