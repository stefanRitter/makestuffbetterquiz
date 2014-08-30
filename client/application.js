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
    .when('/questions',           {templateUrl: '/assets/html/questions/index'})
    .when('/questions/:id',       {templateUrl: '/assets/html/questions/edit'})
    .otherwise({ redirectTo: '/questions'});
});


angular.module('app').run(function ($rootScope, $location) {
  'use strict';
  
  $rootScope.$on('$routeChangeSuccess', function(){
    window.ga('send', 'pageview', $location.path());
  });
  
  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/join');
    }
  });
});
