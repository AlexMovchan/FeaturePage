let root = angular.module('myApp');
root.controller("rootCtrl", rootCtrl);

	function rootCtrl($scope, translationService, desktopNotification) {
 		let vm = this;

 		vm.colorTheme = '#ffd640';

 		vm.changeColor = function(color){
 			vm.colorTheme = color;
            console.log(color);
 		}

 		vm.isAuthorized = false;
 		vm.login;
 		vm.allowAuth = function(){
 			vm.isAuthorized = true;
 		}

    }