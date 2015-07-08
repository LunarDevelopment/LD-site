'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.Notifications
 * @description
 * # Notifications
 * Factory in the smcmsApp.
 */
angular.module('smcmsApp')
    .factory('Notifications', function () {
        // Service logic
        // ...
        var alerts = [];
        var addAlert = function (type, msg) {
            alerts.length = 0;
            alerts.push({
                type: type,
                msg: msg
            });
        };
        var closeAlert = function () {
            alerts.length = 0;
        };
        // Public API here
        return {
            alerts: alerts,
            addAlert: addAlert,
            closeAlert: closeAlert
        };
    });