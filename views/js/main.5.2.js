var Song = Backbone.Model.extend();

var SongsCollection = Backbone.Collection.extend({ //Collection
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: "li",
	render: function(){
		this.$el.html(this.model.get("title"));
		return this;
	}
});


//render the view of the collection
var SongsViewCollection = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({ model: song });
			self.$el.append(songView.render().$el);
		})
	}
})

var songs = new SongsCollection([
	new Song({ title: "Blue is Green" }),
	new Song({ title: "So What" }),
	new Song({ title: "Hello" })
])

var songsViewCollection = new SongsViewCollection({
	el: "#songs", model: songs
});

songsViewCollection.render();