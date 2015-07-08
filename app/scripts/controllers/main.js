'use strict';

/**
 * @ngdoc function
 * @name lunardevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lunardevApp
 */
angular.module('lunardevApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {
    $scope.pageClass = 'slide-animate';
    $scope.items = ['herpderp','herpderp'];
    var classes = [
      'blue-grey', 'grey', 'brown', 'deep-orange', 'orange', 'amber', 'yellow', 'lime', 'light-green', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo', 'deep-purple', 'purple', 'pink', 'red'
    ];
    $scope.generateClass = function () {
      var random = Math.floor(Math.random() * classes.length );
      return 'panel-material-' + classes[random];
    };
    $scope.open = function () {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/contactmodal.html',
        controller: 'ContactCtrl',
        size: ''
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
