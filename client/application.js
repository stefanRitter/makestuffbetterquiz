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
    .when('/',                      {templateUrl: '/assets/html/stories/index'})
    .when('/stories/:name',         {templateUrl: '/assets/html/stories/show'})
    .when('/stories/:name/:index',  {templateUrl: '/assets/html/stories/show'})

    // Admin:
    //.when('/stories/:name/edit',  {templateUrl: '/assets/html/stories/edit'})
    //.when('/questions',           {templateUrl: '/assets/html/questions/index'})
    //.when('/questions/:id',       {templateUrl: '/assets/html/questions/edit'})
    
    .otherwise({ redirectTo: '/'});
});


angular.module('app').run(function ($rootScope, $location) {
  'use strict';
  
  $rootScope.$on('$routeChangeSuccess', function(){
    window.ga('send', 'pageview', $location.path());
  });
});
