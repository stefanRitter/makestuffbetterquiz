angular.module('app', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'angular-loading-bar'
]);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  'use strict';

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/admin/stories/',            {templateUrl: '/assets/html/stories/index'})
    .when('/admin/stories/:name/edit',  {templateUrl: '/assets/html/stories/edit'})
    .when('/admin/questions',           {templateUrl: '/assets/html/questions/index'})
    .when('/admin/questions/:id',       {templateUrl: '/assets/html/questions/edit'})
    .otherwise({ redirectTo: '/admin/questions'});
});
