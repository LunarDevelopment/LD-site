'use strict';

/**
 * @ngdoc function
 * @name lunardevApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the lunardevApp
 */
angular.module('lunardevApp')
  .controller('ContactCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
