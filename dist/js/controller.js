angular.module('myApp')
	.constant( 'config', {
	    rltm: {
	        service: 'pubnub', 
	        config: {
	            publishKey: 'pub-c-f0442ea5-551d-4ffb-8411-591d75b94893',
	       		subscribeKey: 'sub-c-c7e01c86-7e93-11e7-9c4e-aaaf27406e25',
	       		secretKey: 'sec-c-MzQ2YWIyNzgtY2Y1Ni00NjIzLWE5NTktODA2ODM2ZDI2YTE5'
	        }
	    }
	});
angular.module('myApp')
	.controller("contactsCtrl", function() {
		var vm = this;
		vm.modal = $('#myModal');

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		vm.img = $('#ava')
		vm.modalImg = $("#img01");
		vm.showModal = function(){
			console.log(vm.img.attr('src'));
		    vm.modal.css('display', "block");
		    vm.modalImg.attr('src', vm.img.attr('src'));
		}

		// Get the <span> element that closes the modal
		vm.span = $(".close")[0];

		// When the user clicks on <span> (x), close the modal
		vm.close = function() {
		  vm.modal.css('display', "none");
		}

		// new Timesheet('timesheet', 2014, 2017, [
		//   ['2014', '2016', '#1', 'Installation engineer for satellite TV and air conditioners'],
		//   ['01/2016', '01/2017', '#2' ,'Specialist in repairing washing machines'],
		//   ['04/2017', '05/2017', 'NETDMT RelateData #3', 'Front End Dev'],
		//   ['04/2017',  'BPO Telecom #4', 'Front End Dev']
		// ]);
		new Timesheet('timesheet', 2014, 2020, [

  ['01/2014', '01/2016', 'Installation engineer for satellite TV and air conditioners', 'lorem'],
  ['01/2016', '01/2017', 'Specialist in repairing washing machines', 'dolor'],
  ['04/2017', '05/2017', 'NETDMT RelateData (Front End Developer)', 'default'],
  ['05/2017', '09/2017', 'BPO Telecom (Front End Developer)', 'ipsum']
]);
	})
angular.module('myApp')
	.controller("featuresCtrl", featuresCtrl);

    function featuresCtrl($interval, desktopNotification, Messages, $timeout, nameStorage) {

        rootCtrl.apply(this, arguments);

        let vm = this;
		vm.colWidth = 2; // default value for column of picture in Gallery
		vm.tempURL = null; //default value for add picture ti the album
		vm.drawIsAllowed = true;  //var for timer which used canvas
		vm.colorTempVar = true;	//var for timer which used color Gradient Timer
		vm.colorInterval;

		//initialize bootstrap tooltip
		$(function () {
		  	$('[data-toggle="tooltip"]').tooltip()
		})

		//ON or OFF interval for changing color gradient of animated elements
		vm.toggleColorInterval = function(){
			if(vm.colorTempVar){
				vm.tempcol1 = 10;
				vm.tempcol2 = 15;
				vm.tempcol3 = 20;
				vm.tempcol4 = 25;
				vm.tempcol5 = 30;
				vm.colorInterval = $interval(function(){
					vm.tempcol1 += 2;
					vm.tempcol2 += 2;
					vm.tempcol3 += 2;
					vm.tempcol4 += 2;
					vm.tempcol5 += 2;
				}, 30)
				vm.colorTempVar = false;
			}else{
				$interval.cancel(vm.colorInterval);
				vm.colorTempVar = true;
			}
		}

		//toggle element by ID
		vm.toggleElement = function(ID){
			$(ID).slideToggle(400);
		}

	    //delete img from picGallery
	    vm.delImg = function(index){
	    	if(confirm('Are you sure?')){
	    		vm.pictures.splice(index, 1);
	    	}
	    }

	    //add img to picGallery
	    vm.addImg = function(){
    		vm.pictures.push({src: vm.tempURL, alt: 'Uploaded Picture Not found'});
    		vm.tempURL = null;
	    }

	    vm.draw = function() {
    		vm.drawIsAllowed = false;
            let canvas = document.getElementById("canvas");
            canvas.innerHTML = '';
            let context = canvas.getContext("2d");
           	context.clearRect(0, 0, canvas.width, canvas.height);

            let x = [90, 130, 130, 80, 30, 40, 90, 127, 43, 128, 33, 127, 38, 130, 130, 90, 130, 130, 80, 30, 40, 140, 180, 220, 230, 180, 140, 140, 218, 141, 228, 143, 222, 140, 140, 180, 220, 230, 180, 140];
            let y = [20, 30, 180, 200, 160, 60, 20, 30, 60, 100, 160, 178, 90, 55, 30, 20, 30, 180, 200, 160, 60, 30, 20, 60, 160, 200, 180, 31, 60, 100, 160, 179, 90, 55, 30, 20, 60, 160, 200, 180];
            let i = 0;
            context.save();

            context.beginPath();
            context.moveTo(90,20);

            let gradient = context.createLinearGradient(0, 0, 0, 300);
            let timer = $interval(drawStroke, 100);
            function drawStroke(){
                context.lineTo(x[i], y[i]);
                context.fillStyle = gradient;
                context.fill();
                context.stroke();

                gradient.addColorStop(0, "#2eadfd");
                gradient.addColorStop(0.85, "White");
                i += 1;
                if(i == 21) {
                    context.moveTo(x[i], y[i]);
                }
                if(i == 41) {
                    $interval.cancel(timer);
                    context.closePath();
                    context.font = "bold 36px black";
                    context.fillText("Main", 300, 90);
                    context.fillText("Academy", 270, 130);
               		vm.drawIsAllowed = true;
                }
            }
        }

		//data for dragNdrop panel
		vm.models = {
	        lists: [{label: "Item A", id: 4},
	        		{label: "Item B", id: 3},
	        		{label: "Item C", id: 2},
	        		{label: "Item D", id: 66},
	        		{label: "Item E", id: 32},
	        		{label: "Item F", id: 5}
	        ],
	        selected: [],
	    };

	    //data for picture Gallery
	    vm.pictures = [
	    	{src: 'https://i.ytimg.com/vi/z3RW89P4l8U/maxresdefault.jpg', alt: 'Content Picture'},
	    	{src: 'https://cdn-images-1.medium.com/max/1600/1*I_r0YPufSGz-pTgHsDwqDg.png', alt: 'Content Picture'},
	    	{src: 'https://i.ytimg.com/vi/QFtxVIO8TT0/maxresdefault.jpg', alt: 'Content Picture'},
	    	{src: 'http://blog.eduweb.pl/wp-content/uploads/2016/10/cover.jpg', alt: 'Content Picture'},
	    ];

        vm.playAudio = function() {
	        var audio = new Audio('../audio/msg.mp3');
	        audio.play();
	    };

        vm.showNotification = function(){
        	desktopNotification.requestPermission().then(function (permission) {
				if(Notification.permission == 'granted'){
					vm.playAudio();
				}
				desktopNotification.show('Hello', {
					icon: "../img/ava.jpg",
	    			body: 'This is notification))',
	    		});
			})
		}

        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        vm.options = {
            scales: {
				yAxes: [
					{
						id: 'y-axis-1',
						type: 'linear',
						display: true,
						position: 'left'
					},
					{
						id: 'y-axis-2',
						type: 'linear',
						display: true,
						position: 'right'
					}
				]
            }
        };

        // *********************  chat functions *****************
        var chatmessages = document.getElementById('chatId');
        vm.messages = [];
        Messages.receive(function(msg) {
        	if(msg.room == vm.currentTicketId){
	            vm.messages.push(msg);
	            setTimeout(function() {
	            	console.log(chatmessages.scrollHeight);
	                document.getElementById('chatId').scrollTop = document.getElementById('chatId').scrollHeight;
	            }, 10);
        	}
        });
        vm.myName = 'Alex';
        vm.userName = nameStorage.getName();
        vm.defaultUser = {name: vm.userName};
        // Send Messages
        vm.send = function() {
            //initialize user name
            console.log(vm.userName);
            vm.defaultUser = {name: vm.userName};
            Messages.user(vm.defaultUser);
            Messages.send({data: vm.textbox});

            console.log(vm.messages);

            var dialog = {data: vm.textbox, user: Messages.user(vm.me), room: vm.currentTicketId}
            vm.textbox = "";
        };

        $('#usermessage').keypress(function(event){
		    var keycode = (event.keyCode ? event.keyCode : event.which);
		    if(keycode == '13'){
		        vm.send();
		    }
		});
	}



let root = angular.module('myApp');
root.controller("rootCtrl", rootCtrl);

	function rootCtrl($scope, translationService, desktopNotification, nameStorage) {
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