'use strict';

/**
 * @ngdoc overview
 * @name lunardevapp
 * @description
 * # lunardevapp
 *
 * Main module of the application.
 */
angular
  .module('lunardevapp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'flock.bootstrap.material',
    'ui.unique',
    'socialLinks'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        resolve: {
          tableData: function ($http) {
            return $http.get('api/posts')
              .then(function (response) {
                return response.data;
              });
          }
        }
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        resolve: {
          tableData: function ($http) {
            return $http.get('api/projects')
              .then(function (response) {
                return response.data;
              });
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
