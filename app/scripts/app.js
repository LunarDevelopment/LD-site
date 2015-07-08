'use strict';

/**
 * @ngdoc overview
 * @name lunardevApp
 * @description
 * # lunardevApp
 *
 * Main module of the application.
 */
angular
    .module('lunardevApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/blog', {
              templateUrl: 'views/blog.html',
              controller: 'BlogCtrl'
            })
            .when('/projects', {
              templateUrl: 'views/projects.html',
              controller: 'ProjectsCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });