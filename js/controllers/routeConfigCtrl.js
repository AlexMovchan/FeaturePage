angular.module("myApp")
    .config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when("/home", {
		    templateUrl: "view/home.html",
        controller: 'homeCtrl',
        controllerAs: 'home'
		});

		$routeProvider.when("/contacts", {
        templateUrl: "view/contacts.html",
        controller: 'contactsCtrl',
		    controllerAs: 'contacts'

		});

		$routeProvider.when("/my_works", {
	    templateUrl: "view/my_works.html",
		});

		$routeProvider.when("/used_libraries", {
		    templateUrl: "view/used_libraries.html",
		});

		$routeProvider.otherwise({
		    templateUrl: "view/home.html",
        controller: 'homeCtrl',
        controllerAs: 'home'
		});

        $locationProvider.html5Mode({
		  enabled: false,
		  requireBase: false
		});
  	})