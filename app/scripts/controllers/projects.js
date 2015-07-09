'use strict';

/**
 * @ngdoc function
 * @name lunardevApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the lunardevApp
 */
angular.module('lunardevApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.names = ['Igor Minar', 'Brad Green', 'Dave Geddes', 'Naomi Black', 'Greg Weber', 'Dean Sofer', 'Wes Alvaro', 'John Scott', 'Daniel Nadasi'];
    $scope.projects = [
      {
        category: 'Development',
        title: 'Herp derp ',
        description: 'Sriracha hella salvia, locavore mumblecore occupy twee Pitchfork craft beer ugh try-hard pug disrupt.',
        tech: 'AngularJS, PHP Rest API, Bootstrap 3, Yeoman-angular',
        status: 'Planned'
    }, {
        category: 'Herp',
        title: 'Something super cool',
        description: 'Sriracha hella salvia, locavore mumblecore occupy twee Pitchfork craft beer ugh try-hard pug disrupt.',
        tech: 'AngularJS, Material Design, Yeoman-angular',
        status: 'Completed'
        }, {
        category: 'Derp',
        title: 'Reinvent the wheel',
        description: 'Sriracha hella salvia, locavore mumblecore occupy twee Pitchfork craft beer ugh try-hard pug disrupt.',
        tech: 'AngularJS, PHP Rest API',
        status: 'Ongoing '
        }, {
        category: 'Gerp',
        title: 'My website',
        description: 'Sriracha hella salvia, locavore mumblecore occupy twee Pitchfork craft beer ugh try-hard pug disrupt.',
        tech: 'AngularJS, Slim PHP Rest API, Bootstrap 3, Yeoman-angular',
        status: 'Ongoing '
        }
    ];
    $scope.formatData = function (objectFromDB) {
      return objectFromDB.split(', ');
    };
  });