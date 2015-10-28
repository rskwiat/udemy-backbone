var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: 'li',
	render: function(){
			this.$el.html(this.model.get('title'));
			return this;
	}
})

var SongsView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({ model: song });
			self.$el.append(songView.render().$el);
		});
	}
});

var songs = new Songs([
	new Song({ title: 'Crystal Blue' }),
	new Song({ title: 'So What' }),
	new Song({ title: 'All Blues' })
]);

var songsView = new SongsView({
	el: '#list',
	model: songs
});

songsView.render()
