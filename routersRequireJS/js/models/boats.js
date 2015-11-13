define([
	'underscore', 
	'backbone', 
	'models/boat'], function(_, Backbone, Boat){
			
	var Boats = Backbone.Collection.extend({
		model: Boat
	});
	
	return Boats;

});