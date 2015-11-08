var person = {
	name: "Rob",
	walk: function(){
		this.trigger('walking',{
			speed: 1,
			startTime: "09:00"
		});
	}
};

_.extend(person, Backbone.Events);

person.once("walking", function(e){
	console.log('person is walking');
	console.log('Event args', e);
});

// person.off('walking');
person.walk();