'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.Data
 * @description
 * # Data
 * Factory in the smcmsApp.
 */
angular.module('lunardevApp')
    .factory('Data', function () {
        // Service logic
        // ...
        var pendingFirstSort = function (x) {
            if (x.status === 'Pending') {
                return 0;
            } else if (x.status === 'Sold-Out') {
                return 1;
            } else if (x.status === 'Completed') {
                return 2;
            } else if (x.status === 'Cancelled') {
                return 3;
            }
        };
        var timeRemainingSort = function (x) {
            var d1 = new Date();
            var d2 = new Date(x.send_date || x.date_required);
            var miliseconds = d2 - d1;
            var seconds = miliseconds / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            return Math.round(days);
        };
        // Public API here
        return {
            timeRemainingSort: timeRemainingSort,
            pendingFirstSort: pendingFirstSort
        };
    });