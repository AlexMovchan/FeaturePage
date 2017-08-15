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