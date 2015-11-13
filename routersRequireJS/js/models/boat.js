define([
	'underscore', 
	'backbone', 
	'models/vehicle'], function(_, Backbone, Vehicle){
		
	var Boat = Vehicle.extend();
	
	return Boat;

});
	