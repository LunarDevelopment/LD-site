'use strict';

/**
 * @ngdoc service
 * @name smcmsApp.API
 * @description
 * # API
 * Factory in the smcmsApp.
 */

angular.module('smcmsApp')
    .factory('API', function (Restangular) {
        // Service logic
        // ...

        var mailers = Restangular.service('mailers');
        var profit = Restangular.all('profit');
        var design = Restangular.service('design');

        // Public API here
        return {
            mailers: mailers,
            profit: profit,
            design: design
        };
    });