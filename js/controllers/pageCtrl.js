angular.module('myApp')
	.controller("pageCtrl", function($scope, $interval) {
		$scope.colWidth = 2; // default value for column of picture in Gallery 
		$scope.tempURL = null; //default value for add picture ti the album
		$scope.drawIsAllowed = true;  //var for timer which used canvas
		$scope.colorTempVar = true;	//var for timer which used color Gradient Timer
		$scope.colorInterval;

		//initialize bootstrap tooltip
		$(function () {
		  	$('[data-toggle="tooltip"]').tooltip()
		})

		//ON or OFF interval for changing color gradient of animated elements
		$scope.toggleColorInterval = function(){
			if($scope.colorTempVar){
				$scope.tempcol1 = 10;
				$scope.tempcol2 = 15;
				$scope.tempcol3 = 20;
				$scope.tempcol4 = 25;
				$scope.tempcol5 = 30;
				$scope.colorInterval = $interval(function(){
					$scope.tempcol1 += 2;
					$scope.tempcol2 += 2;
					$scope.tempcol3 += 2;
					$scope.tempcol4 += 2;
					$scope.tempcol5 += 2; 	
				}, 30)
				$scope.colorTempVar = false;
			}else{
				$interval.cancel($scope.colorInterval);
				$scope.colorTempVar = true;
			}
		}
		
		//toggle element by ID
		$scope.toggleElement = function(ID){
			$(ID).slideToggle(400);
		}

	    //delete img from picGallery
	    $scope.delImg = function(index){
	    	if(confirm('Are you sure?')){
	    		$scope.pictures.splice(index, 1);
	    	}
	    }

	    //add img to picGallery
	    $scope.addImg = function(){
    		$scope.pictures.push({src: $scope.tempURL, alt: 'Uploaded Picture Not found'});
    		$scope.tempURL = null;
	    }

	    $scope.draw = function() {
	    	if($scope.drawIsAllowed){
	    		$scope.drawIsAllowed = false;
	            var canvas = document.getElementById("canvas");
	            canvas.innerHTML = '';
	            var context = canvas.getContext("2d");
	           	context.clearRect(0, 0, canvas.width, canvas.height);

	            var x = [90, 130, 130, 80, 30, 40, 90, 127, 43, 128, 33, 127, 38, 130, 130, 90, 130, 130, 80, 30, 40, 140, 180, 220, 230, 180, 140, 140, 218, 141, 228, 143, 222, 140, 140, 180, 220, 230, 180, 140];
	            var y = [20, 30, 180, 200, 160, 60, 20, 30, 60, 100, 160, 178, 90, 55, 30, 20, 30, 180, 200, 160, 60, 30, 20, 60, 160, 200, 180, 31, 60, 100, 160, 179, 90, 55, 30, 20, 60, 160, 200, 180];
	            var i = 0;
	            context.save();

	            context.beginPath();  
	            context.moveTo(90,20);
	     
	            var gradient = context.createLinearGradient(0, 0, 0, 300);
	            var timer = setInterval(drawStroke, 100); 
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
	                    clearInterval(timer);
	                    context.closePath();
	                    context.font = "bold 36px black";
	                    context.fillText("KNOW", 300, 90);
	                    context.fillText("CANVAS ?", 270, 130);
	               		$scope.drawIsAllowed = true;
	                }
	               	$scope.$apply();
	            }
	        }else{
	        	return;
	        }
        }

		//data for dragNdrop panel
		$scope.models = {
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
	    $scope.pictures = [
	    	{src: 'https://i.ytimg.com/vi/z3RW89P4l8U/maxresdefault.jpg', alt: 'Content Picture'},
	    	{src: 'https://cdn-images-1.medium.com/max/1600/1*I_r0YPufSGz-pTgHsDwqDg.png', alt: 'Content Picture'},
	    	{src: 'https://i.ytimg.com/vi/QFtxVIO8TT0/maxresdefault.jpg', alt: 'Content Picture'},
	    	{src: 'http://blog.catchpoint.com/wp-content/uploads/2016/11/front-end-back-end-network-performance.jpg', alt: 'Content Picture'},
	    	{src: 'http://blog.eduweb.pl/wp-content/uploads/2016/10/cover.jpg', alt: 'Content Picture'},
	    	{src: 'https://gun.io/static/uploads/web%20dev.jpg', alt: 'Content Picture'},
	    ];
	})
