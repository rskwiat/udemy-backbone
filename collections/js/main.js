var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs();

songs.add(new Song({title: "Song 3", genre: "Jazz", downloads: 110}), {at: 0});
songs.push(new Song({title: "Song 2", genre: "Pop", downloads: 90}));
songs.push(new Song({title: "Song 1", genre: "Jazz", downloads: 130}));
songs.push(new Song({title: "Song 51", genre: "Jazz", downloads: 103}));

var jazzSongs = songs.where({genre: "Jazz"});
var firstJazzSong = songs.findWhere({genre: "Jazz"});

console.log(jazzSongs);
console.log('filtered songs', firstJazzSong);

var filteredSongs = songs.where({genre: "Jazz", title: "Song 1" });
console.log(filteredSongs);

var topDownloads = songs.filter(function(song){
	return song.get("downloads") > 100;
});

console.log(topDownloads);

songs.each(function(song){
	console.log(song);
});