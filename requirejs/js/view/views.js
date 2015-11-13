
define([
	'jquery',
	'underscore', 
	'backbone',
	'models/models'], function($, _, Backbone, Song){
	
	var SongView = Backbone.View.extend({
		render: function(){
		
			var html = this.model.get('title');
			this.$el.html(html)
		
			return this;
		}
	});
	
	return SongView;

});


