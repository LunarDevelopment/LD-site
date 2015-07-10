'use strict';

/**
 * @ngdoc directive
 * @name lunardevApp.directive:randomPanelClass
 * @description
 * # randomPanelClass
 */
angular.module('lunardevApp')
  .directive('randomLabelClass', function () {
  return {
    restrict: 'EA',
    replace: false,
    scope: {
      ngClasses: '=ngRandomClass'
    },
    link: function (scope, elem) {
      //Add random background class to selected element
      scope.ngClasses = [
        'default', 'primary', 'success', 'warning', 'danger', 'info'
      ];
      elem.addClass('label-' + scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
    }
  };
});
