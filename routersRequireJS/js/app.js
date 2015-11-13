define([
	'underscore',
	'backbone',
	'models/vehicle',
	'models/car',
	'models/cars',
	'models/boat',
	'models/boats',
	'view/home'
	], function(_, Backbone, Vehicle, Car, Cars, Boat, Boats, HomeView){
		
		var initialize = function(){

			var cars = new Cars([
				new Car({make: 'Ford', site: 'http://ford.com', registrationNumber: 'XLI887'}),
				new Car({make: 'GMC', site: 'http://chevy.com', registrationNumber: 'ZNP123'}),
				new Car({make: 'Dodge', site: 'http://dodge.com', registrationNumber: 'XUV456'})
			]);
		
			var boats = new Boats([
				new Boat({make: 'Worldcat', site: 'http://worldcat.com/', registrationNumber: 'BOAT-XIU102'}),
				new Boat({make: 'Campion', site: 'http://campionboats.com/', registrationNumber: 'BOAT-XLI887'}), 	
				new Boat({make: 'Boston Whaler', site: 'http://www.bostonwhaler.com/', registrationNumber: 'BOAT-XDS201'})
			]);
			
			console.log(HomeView)

		};
		
		return{
			initialize: initialize
		};
	
})