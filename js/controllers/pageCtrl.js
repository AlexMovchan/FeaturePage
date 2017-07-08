angular.module('myApp')
	.controller("pageCtrl", function($scope) {
		$scope.colWidth = 2; // default value for column of picture in Gallery 
		$scope.tempURL = null;

		//initialize bootstrap tooltip
		$(function () {
		  	$('[data-toggle="tooltip"]').tooltip()
		})
		
		//toggle element by ID
		$scope.toggleElement = function(ID){
			$(ID).slideToggle(400);
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
	    	{src: 'http://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/01-beautiful-white-cat-imagescar-wallpaper.jpg', alt: 'Content Picture'},
	    	{src: 'http://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/06-funny-cat-wallpapercat-wallpaper.jpg', alt: 'Content Picture'},
	    	{src: 'https://gdb.rferl.org/358ED41C-B546-4B52-B8E3-24E6105503D5_w1023_r1_s.jpg', alt: 'Content Picture'},
	    	{src: 'http://www.bugaga.ru/uploads/posts/2017-04/thumbs/1493051601_kartinki-41.jpg', alt: 'Content Picture'},
	    	{src: 'https://s00.yaplakal.com/pics/userpic/6/7/8/av-656876.jpg', alt: 'Content Picture'},
	    	{src: 'http://www.bugaga.ru/uploads/posts/2016-04/thumbs/1460696793_kartinki-31.jpg', alt: 'Content Picture'},
	    ]


	    //delete img from picGallery
	    $scope.delImg = function(index){
	    	if(confirm('Are you sure?')){
	    		$scope.pictures.splice(index, 1);
	    	}
	    }

	    //add img to picGallery
	    $scope.addImg = function(){
	    		$scope.pictures.push({src: $scope.tempURL, alt: 'Uploaded Picture Not found'});
	    }
	})
