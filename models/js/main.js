//Model containers for data
//ajax requests from server inside of our container
//store data via hash


//Collection is a group of Models
//View is View 

//fetch - get 
//save - post
//destory - delete

// var Song = Backbone.Model.extend({
// 	initialize: function(){
// 		console.log('A new song is playing');
// 	}
// });

// var song = new Song();

// var Song = Backbone.Model.extend({
// 	defaults:{
// 		genre: 'pop'
// 	}
// });

// var song = new Song({
// 	title: 'Blue Mountain Waters',
// 	artist: 'Miles Davis',
// 	year: 1958
// });

// var Song = Backbone.Model.extend({
// 	validate: function(attrs){
// 		if (!attrs.title)
// 			return "Title is Required"
// 	}
// });

// var song = new Song();
// //song.isValid();
// // validationError

// var Animal = Backbone.Model.extend({
// 	walk: function(){
// 		console.log('Animal is walking')
// 	}
// });

// var Dog = Animal.extend({
// 	walk: function(){
// 		Animal.prototype.walk.apply();
// 		console.log('dog walking here');
// 	}
// });

// var dog = new Dog();

// dog.walk();

var Song = Backbone.Model.extend({
	urlRoot: "api/songs/"
});

var song = new Song({id: 1})
song.fetch();

song.set('title', 'new Title');
song.save();

