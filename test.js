'use strict';

describe('Directive: ssn', function () {

  beforeEach(module('input-ssn'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show the SSN in a standard format', inject(function ($compile) {
    scope.test = '123456789';
    element = angular.element('<input ng-model="test" type="text" ssn />');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.val()).toBe('123-45-6789');
  }));
});
