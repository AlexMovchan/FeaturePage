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