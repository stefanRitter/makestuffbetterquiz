angular.module('app').controller('questionController', ['Question', '$location', '$routeParams', function (Question, $location, $routeParams) {
  'use strict';
  var vm = this,
      id = $routeParams.id;

  vm.categories = Question.getCategories();

  vm.addAnswer = function () {
    vm.question.answers.push({
      score: 0,
      answer: '',
      correct: false
    });
  };

  vm.removeAnswer = function (index) {
    vm.question.answers.splice(index, 1);
  };

  vm.addCategory = function (category) {
    vm.question.category.push(category);
    var index = vm.categories.indexOf(category);
    if (index >= 0) { 
      vm.categories.splice(index, 1); 
    }
  };

  vm.removeCategory = function (index) {
    vm.question.category.splice(index, 1);
  };

  vm.save = function () {
    vm.question.$save(function (data) {
      console.log(data);
      $location.path('/');
     });
  };

  if (id === 'new') {
    vm.question = new Question();
    vm.question.category = [];
    vm.question.answers = [];
    vm.addAnswer();
  } else {
    vm.question = Question.get({id: id});
    vm.question.category = vm.question.category || [];
  }
}]);
