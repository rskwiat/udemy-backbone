var SongView = Backbone.View.extend({
	tagName: "h3",
	className: "song",
	id: "mySong-1",
	attributes:{
		"data-genre": "Jazz",
		"data-color": "yellow"
	},
	render: function(){
		this.$el.html("Hello World");

		return this;
	}
});

var songView = new SongView();//{el: "#container"}
// songView.render();

$('.container').html(songView.render().$el);