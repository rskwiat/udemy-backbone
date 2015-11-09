var Vehicle = Backbone.Model.extend({
	urlRoot: "/api/vehicles/",
	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "This vehicle needs to be registered"
	},
	start: function(){
		console.log('Vehicle started');
	}
});

var content = $('#content');

var Car = Vehicle.extend();
var Boat = Vehicle.extend();

var Cars = Backbone.Collection.extend({
	model: Car
});

var Boats = Backbone.Collection.extend({
	model: Boat
});

var VehicleView = Backbone.View.extend({
		tagName: 'div',
		className: 'vehicle col-xs-12 col-sm-4 col-md-4',
		render: function(){
			var template = _.template($('#vehicleTemplate').html());
			var html = template(this.model.toJSON());
			this.$el.html(html);
			return this;
		}
});

var VehiclesView = Backbone.View.extend({
	tagName: 'div',
	className: 'view',
	render: function(){
		var self = this;
		this.model.each(function(vehicle){
			var vehicleView = new VehicleView({ model: vehicle });
			self.$el.append(vehicleView.render().$el);
		});
	},
});

var HomeView = Backbone.View.extend({
	render: function(){
		var template = _.template($('#homeTemplate').html());
		this.$el.html(template);
		return this;
	}
});


var cars = new Cars([
	new Car({make: 'Ford', site: 'http://ford.com', registrationNumber: 'XLI887'}),
	new Car({make: 'GMC', site: 'http://chevy.com', registrationNumber: 'ZNP123'}),
	new Car({make: 'Dodge', site: 'http://dodge.com', registrationNumber: 'XUV456'})
]);

var boats = new Boats([
	new Boat({make: 'Worldcat', site: 'http://worldcat.com/', registrationNumber: 'BOAT-XIU102'}),
	new Boat({make: 'Campion', site: 'http://campionboats.com/', registrationNumber: 'BOAT-XLI887'}), 	
	new Boat({make: 'Boston Whaler', site: 'http://www.bostonwhaler.com/', registrationNumber: 'BOAT-XDS201'})
]);

/* Routing */

var AppRouter = Backbone.Router.extend({
		
	routes:{
		'cars': 'viewCars',
		'boats': 'viewBoats',
		'*other': 'defaultRoute'
	},

	viewCars: function(){
		content.empty();
		var vehiclesView = new VehiclesView({el: '#content', model: cars });
		vehiclesView.render();
	},
	
	viewBoats: function(){
		content.empty();
		var vehiclesView = new VehiclesView({el: '#content', model: boats });
		vehiclesView.render();
	},
	
	defaultRoute: function(){
		content.empty();
		var view = new HomeView({el: '#content'});
		view.render();
	}

});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events:{
		"click": "onClick"
	},

	onClick: function(e){
		var $li = $(e.target);
		$li.siblings().removeClass('active');
		$li.addClass('active');
		var url = $li.attr('data-url');
		router.navigate(url, {trigger: true });
	}
});

var navView = new NavView({el:"#nav"});