var Song = Backbone.Model.extend({
	defaults:{
		listeners: 0
	}
});

var SongView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.onModelChange, this);
	},
	onModelChange: function(){
		this.$el.addClass('someClass')
	},
	render: function(){
		this.$el.html(this.model.get("title") + 
			" - Listeners: " + this.model.get("listeners"));
		return this;
	}
});

var song = new Song({title: "Blue is Green"});
var songView = new SongView({el: "#songs", model: song});
songView.render();