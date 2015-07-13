'use strict';

/**
 * @ngdoc function
 * @name lunardevApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the lunardevApp
 */
angular.module('lunardevApp')
  .controller('ContactCtrl', function ($scope, $log, $modal) {
    $scope.contact = '';
    $scope.open = function () {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/contactmodal.html',
        controller: 'ModalCtrl',
        size: ''
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });