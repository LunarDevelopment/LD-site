'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.Classes
 * @description
 * # Classes
 * Factory in the smcmsApp.
 */
angular.module('smcmsApp')
  .factory('Classes', function () {
    // Service logic
    // ...

    var getPanelClass = function (status) {
        var PannelClass = null;
        if (status === 'Completed') {
            PannelClass = 'panel-primary';
        } else if (status === 'Sold-Out') {
            PannelClass = 'panel-success';
        } else if (status === 'Cancelled') {
            PannelClass = 'panel-danger';
        } else if (status === 'Pending') {
            PannelClass = 'panel-warning';
        } else {
            PannelClass = 'panel-primary';
        } 
        return PannelClass;
    };
    var getProgressType = function (value, limits) {
        var type;
        if (value < limits[0]) {
          type = 'danger';
        } else if (value < limits[1]) {
          type = 'warning';
        } else if (value < limits[2]) {
          type = 'info';
        } else {
          type = 'success';
        }
        return type; 
    };

    // Public API here
    return {
      getPanelClass: getPanelClass, 
      getProgressType: getProgressType        
    };
  });