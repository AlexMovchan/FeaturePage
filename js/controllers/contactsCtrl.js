angular.module('myApp')
	.controller("contactsCtrl", function() {
		var vm = this;
		vm.alex = 'HOHOHO'
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
	})