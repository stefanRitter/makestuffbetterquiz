angular.module('app').controller('newQuestionController', ['Question', function (Question) {
  'use strict';
  var vm = this;

  vm.question = {};
  vm.question.category = 'biology';
  vm.categories = Question.getCategories();
}]);
