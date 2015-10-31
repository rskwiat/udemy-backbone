var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: "li",
	render: function(){
		this.$el.html(this.model.get("title"));
		this.$el.attr('id', this.model.id);
		return this;
	}
});

var SongsView = Backbone.View.extend({
	tagName: "ul",
	initialize: function(){
		this.model.on("add", this.onSongAdded, this);
		this.model.on("remove", this.onSongRemoved, this);
	},
	onSongAdded: function(song){
		// song.add(new Song());
		// console.log('song added');
		var songView = new SongView({ model: song });
		this.$el.append(songView.render().$el);

		//songs.add(new Song({title: "Song 4"}));
	},
	onSongRemoved: function(song){
		// this.$el.find('li#' + song.id).remove();
		// console.log("Song Removed");
		//songs.remove(songs.at(0));
		this.$('li#' + song.id).remove();
	},
	render: function(){
		var self = this;

		this.model.each(function(song){
			var songView = new SongView({ model: song });
			self.$el.append(songView.render().$el);
		});
	}
});


var songs = new Songs([
	new Song({id: 1, title: "Blue in Green"}),
	new Song({id: 3, title: "So what"}),
	new Song({id: 5, title: "Simpsons"})
]);

//songs.add(new Song({title: "Crazy Cat Lady"});


var songsView = new SongsView({el: "#songs", model: songs});
songsView.render();