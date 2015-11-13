define([
	'underscore', 
	'backbone', 
	'models/car'], function(_, Backbone, Car){
		
	var Cars = Backbone.Collection.extend({
		model: Car
	});
	
	return Cars;

});
	