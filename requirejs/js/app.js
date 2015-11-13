define([
	'underscore',
	'backbone',
	'models/models',
	'view/views'], function(_, Backbone, Song, SongView){
		
		var initialize = function(){
			var song = new Song({ title: "Blue in Green", plays: 1100 });
			
			var songView = new SongView({el: "#container", model: song});
			songView.render();
		};
		
		return{
			initialize: initialize
		};
	
})