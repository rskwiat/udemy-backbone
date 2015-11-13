define([
	'underscore', 
	'backbone', 
	'models/vehicle'], function(_, Backbone, Vehicle){
		
	var Car = Vehicle.extend();
	return Car;
	
});
	