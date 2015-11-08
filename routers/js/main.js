var ArtistsView = Backbone.View.extend({
	render: function(){
		this.$el.html("Artists view");
		return this;
	}
});

var AlbumsView = Backbone.View.extend({
	render: function(){
		this.$el.html("Albums view");
		return this;
	}
});

var GenreView = Backbone.View.extend({
	render: function(){
		this.$el.html("Genre view");
		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes:{
		'albums': 'viewAlbums',
		'albums/:albumId': 'viewAlbumById',
		'artists': 'viewArtists',
		'genres': 'viewGenres',
		'*other': 'defaultRoute'
	},



	viewAlbums: function(){
		var view = new AlbumsView({el: "#container"});
		view.render();
	},

	viewArtists: function(){
		var view = new ArtistsView({el: "#container"});
		view.render();
	},

	viewGenres: function(){
		var view = new GenreView({el: "#container"});
		view.render();
	},

	viewAlbumById: function(albumId){
		console.log(albumId);
	},

	defaultRoute: function(){
		console.log('home');
	},

});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events:{
		"click": "onClick"
	},

	onClick: function(e){
		var $li = $(e.target);
		var url = $li.attr('data-url');
		router.navigate(url, {trigger: true });
	}
});

var navView = new NavView({el:"#nav"});
