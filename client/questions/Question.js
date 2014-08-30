angular.module('app').factory('Question', ['$resource', function ($resource) {
  'use strict';

  var QuestionsResource = $resource('/questions/:id', {name:'@_id'});

  QuestionsResource.getCategories = function () {
    return ['biology', 'physical health', 'mental wellbeing', 'culture'];
  };

  return QuestionsResource;
}]);
