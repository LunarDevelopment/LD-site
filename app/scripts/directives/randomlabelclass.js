'use strict';

/**
 * @ngdoc directive
 * @name lunardevApp.directive:randomPanelClass
 * @description
 * # randomPanelClass
 */
angular.module('lunardevapp')
  .directive('randomLabelClass', function () {
  return {
    restrict: 'EA',
    replace: false,
    link: function (scope, elem) {
      //Add random background class to selected element
      scope.ngClasses = [
        'default', 'primary', 'success', 'warning', 'danger', 'info'
      ];
      elem.addClass('label-' + scope.ngClasses[Math.floor(Math.random() * (scope.ngClasses.length))]);
    }
  };
});
