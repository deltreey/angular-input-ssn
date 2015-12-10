'use strict';
var app = angular.module('app', [ 'input-ssn' ]);

app.controller('MainCtrl', function ($scope) {
	$scope.ssn = 123456789;
});
