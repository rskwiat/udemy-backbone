define(['underscore', 'backbone'], function(_, Backbone){
		
	var Vehicle = Backbone.Model.extend({
		urlRoot: "/api/vehicles/",
		validate: function(attrs){
			if (!attrs.registrationNumber)
				return "This vehicle needs to be registered"
		},
		start: function(){
			console.log('Vehicle started');
		}
	});
	
	return Vehicle;

});