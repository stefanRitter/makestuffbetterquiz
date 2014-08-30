angular.module('app').controller('questionsController', ['Question', function (Question) {
  'use strict';
  var vm = this;

  vm.questions = Question.query();
}]);
