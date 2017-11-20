let root = angular.module('myApp');
root.controller("rootCtrl", rootCtrl);

	function rootCtrl($scope, translationService, desktopNotification, nameStorage) {
 		let vm = this;

 	// 	console.log($('#lastChild').next());
		// $('#lastChild').next().remove();

 		vm.colorTheme = '#ffd640';

 		vm.changeColor = function(color){
 			vm.colorTheme = color;
            console.log(color);
 		}

 		vm.isAuthorized = false;
 		vm.login;
 		vm.allowAuth = function(){
 			vm.isAuthorized = true;
 			nameStorage.setName(vm.login)
 		}
  }

  root.service('nameStorage', function () {
	   var login = 'Bob';
	   return {
	       setName: function (name) {
	         _name = name;
	       },
	      getName: function () {
	         return _name;
	      }
		}
	})