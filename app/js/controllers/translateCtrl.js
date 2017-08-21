angular
	.module('myApp')
	.controller('translateCtrl',['$scope', 'translationService', 
		function ($scope, translationService, desktopNotification){  

		  //Выполняем перевод, если произошло событие смены языка
		  $scope.translate = function(lang){
		       translationService.getTranslation($scope, lang);
		   };
		   // Инициализация
		   $scope.selectedLanguage = 'en';
		   $scope.translate($scope.selectedLanguage);
  
}]);