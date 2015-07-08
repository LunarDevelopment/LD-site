'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('lunardevApp'));

  var ContactCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ContactCtrl = $controller('ContactCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactCtrl.awesomeThings.length).toBe(3);
  });
});
