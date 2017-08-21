angular.module("myApp")
    .config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when("/features", {
		    templateUrl: "view/features.html",
        	controller: 'featuresCtrl',
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
		    templateUrl: "view/features.html",
        	controller: 'featuresCtrl',
        	controllerAs: 'home'
		});

        $locationProvider.html5Mode({
		  enabled: false,
		  requireBase: false
		});
  	})