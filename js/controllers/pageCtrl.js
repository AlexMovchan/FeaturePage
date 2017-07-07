angular.module('myApp')
	.controller("pageCtrl", function($scope) {
		$scope.var = 'hello world';
		$scope.toggleNavbar = function(){
			$('#header').slideToggle(400);
		}
	})