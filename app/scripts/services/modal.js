'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.modal
 * @description
 * # modal
 * Factory in the smcmsApp.
 */
angular.module('smcmsApp')
  .factory('modal', function ($modal) {
    // Service logic
    // ...

    var open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    // Public API here
    return {
      open: open
    };
  });
