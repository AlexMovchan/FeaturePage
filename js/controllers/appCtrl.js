angular.module("myApp", ['dndLists', 'ngRoute']) 

	.config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when("/home", {
		  templateUrl: "/view/home.html"
		});

		$routeProvider.when("/contacts", {
		  templateUrl: "/view/contacts.html"
		});

		$routeProvider.when("/myworks", {
		  templateUrl: "/view/myworks.html"
		});

		$routeProvider.when("/education", {
		  templateUrl: "/view/education.html"
		});

		$routeProvider.otherwise({
		  templateUrl: "/view/home.html"
		});
  	})
