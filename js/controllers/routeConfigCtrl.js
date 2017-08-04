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

		$routeProvider.when("/myworks", {
		    templateUrl: "view/myworks.html",
            controller: 'myWorksCtrl',
		    controllerAs: 'myWorks'
		});

		$routeProvider.when("/education", {
		    templateUrl: "view/education.html",
            controller: 'educationCtrl',
		    controllerAs: 'education'
		});

		$routeProvider.otherwise({
		    templateUrl: "view/home.html",
            controller: 'homeCtrl',
		});
    
        $locationProvider.html5Mode({
		  enabled: false,
		  requireBase: false
		});
  	})