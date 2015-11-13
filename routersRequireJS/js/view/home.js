define([
	'jquery',
	'underscore', 
	'backbone'], function($, _, Backbone){

	var HomeView = Backbone.View.extend({
		render: function(){
			var template = _.template($('#homeTemplate').html());
			this.$el.html(template);
			return this;
		}
	});
	
	
	return HomeView;
		
		
});
		
		