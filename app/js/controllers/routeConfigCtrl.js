angular.module("myApp")
    .config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when("/features", {
		    templateUrl: "dist/view/features.html",
        	controller: 'featuresCtrl',
        	controllerAs: 'home'
		});

		$routeProvider.when("/contacts", {
        	templateUrl: "dist/view/contacts.html",
        	controller: 'contactsCtrl',
		    controllerAs: 'contacts'

		});

		$routeProvider.when("/my_works", {
	    	templateUrl: "dist/view/my_works.html",
		});

		$routeProvider.when("/used_libraries", {
		    templateUrl: "dist/view/used_libraries.html",
		});

		$routeProvider.otherwise({
		    templateUrl: "dist/view/features.html",
        	controller: 'featuresCtrl',
        	controllerAs: 'home'
		});

        $locationProvider.html5Mode({
		  enabled: false,
		  requireBase: false
		});
  	})