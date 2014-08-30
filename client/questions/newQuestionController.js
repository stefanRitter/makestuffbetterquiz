angular.module('app').controller('newQuestionController', ['Question', function (Question) {
  'use strict';
  var vm = this;
  vm.categories = Question.getCategories();

  vm.question = new Question();
  vm.question.categories = [];
  vm.question.answers = [];

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
    vm.question.categories.push(category);
    var index = vm.categories.indexOf(category);
    if (index >= 0) { 
      vm.categories.splice(index, 1); 
    }
  };

  vm.removeCategory = function (index) {
    vm.question.categories.splice(index, 1);
  };

  vm.save = function () {
    vm.question.$save();
  };

  vm.addAnswer();
}]);
