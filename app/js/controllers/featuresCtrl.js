angular.module('myApp')
	.controller("featuresCtrl", featuresCtrl);

    function featuresCtrl($interval, desktopNotification, Messages, $timeout, nameStorage, $scope, HttpLoadData) {

        rootCtrl.apply(this, arguments);

        let vm = this;
		vm.colWidth = 2; // default value for column of picture in Gallery
		vm.tempURL = null; //default value for add picture ti the album
		vm.drawIsAllowed = true;  //var for timer which used canvas
		vm.colorTempVar = true;	//var for timer which used color Gradient Timer
		vm.colorInterval;
		vm.inputWord = '';

        vm.getComments = function(){
            console.log('SOOssssssOOOOPccER');

            HttpLoadData.load({
                "action": "get_comments"
            }).then(function(response) {
                if(typeof(response) == 'object') {
                    vm.commentsData = response;
                    console.log(response);
                }else{
                    vm.commentsData = [];
                }
            });
        };
        vm.getComments();


        vm.addComment = function(){
        	let data = vm.getFormData('#commentForm');
            console.log(data);
            HttpLoadData.load({
                "action": "insert_comment",
				'data' : data,
            }).then(function(response) {
                console.log(response);
                vm.getComments();
            });
        };

        vm.toggleLike = function(isLike, id){
            let toggledLike = (isLike == 1) ? 0 : 1 ;

            let data = {
                isLike : toggledLike,
                id: id,
            };

            HttpLoadData.load({
                "action": "toggle_like",
                'data' : JSON.stringify(data),
            }).then(function(response) {
                vm.getComments();
            });
        };


        vm.getFormData = function(formId){
            let data = $(formId).serializeArray();

            let newData = {};
            for(var i=0; i<data.length; i++){
                newData[data[i].name] = data[i].value;
            }

            data = JSON.stringify(newData);
            return data;

        };

		//initialize bootstrap tooltip
		$(function () {
		  	$('[data-toggle="tooltip"]').tooltip()
		});

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
				}, 30);
				vm.colorTempVar = false;
			}else{
				$interval.cancel(vm.colorInterval);
				vm.colorTempVar = true;
			}
		};

		//toggle element by ID
		vm.toggleElement = function(ID){
			$(ID).slideToggle(400);
		};

	    //delete img from picGallery
	    vm.delImg = function(index){
	    	if(confirm('Are you sure?')){
	    		vm.pictures.splice(index, 1);
	    	}
	    };

	    //add img to picGallery
	    vm.addImg = function(){
    		vm.pictures.push({src: vm.tempURL, alt: 'Uploaded Picture Not found'});
    		vm.tempURL = null;
	    };

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
        };

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
	        var audio = new Audio('../dist/audio/msg.mp3');
	        audio.play();
	    };

        vm.showNotification = function(){
        	desktopNotification.requestPermission().then(function (permission) {
				if(Notification.permission == 'granted'){
					vm.playAudio();
				}
				desktopNotification.show('Hello', {
					icon: "../dist/img/ava.jpg",
	    			body: 'This is notification))',
	    		});
			})
		};

        vm.labels = [];
        for(let i = 0; i< 18; i++){
        	vm.labels.push(i);
		  }
        vm.series = ['Series A', 'Series B'];
        vm.getRandom = function getRandomInt(min, max) {
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        };

        vm.data = [
          [65, 59, 80, 81, 56, 55, 40, 22, 42, 34, 75, 23, 12, 34, 66, 4, 22, 3],
          [28, 48, 40, 19, 86, 27, 90, 54, 24, 12, 43, 26, 66, 54, 35, 7, 34, 1]
       ];
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

        $interval(function(){
           vm.data[0] = vm.data[0].splice(1, 17);
           vm.data[1] = vm.data[1].splice(1, 17);
           vm.data[0].push(vm.getRandom(1, 100));
           vm.data[1].push(vm.getRandom(1, 100));
		  }, 200);
       vm.onClick = function (points, evt) {
            console.log(points, evt);
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

		$('.key').click(function(){
			if($(this).text() == 'Backspace'){
				vm.inputWord = vm.inputWord.substring(0, vm.inputWord.length-1)
				$scope.$apply();
			}else if($(this).text() == 'SPACE'){
				vm.inputWord += ' ';
			}else{
				vm.inputWord += $(this).text();
				$scope.$apply();
			}
		})
	}


