angular.module('app').factory('Story', ['$resource', function ($resource) {
  'use strict';

  var QuestionsResource = $resource('/stories/:name', {name:'@name'});

  QuestionsResource.getCategories = function () {
    return ['biology', 'physical health', 'mental wellbeing', 'culture'];
  };

  return QuestionsResource;
}]);
