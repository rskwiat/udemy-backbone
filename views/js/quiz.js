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

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var VehicleView = Backbone.View.extend({
		tagName: 'li',
		className: 'vehicle',
		events:{
			"click .delete": "onDelete"
		},
		onDelete: function(){
			self = this;
			this.model.destroy({
				success: function(){
					self.remove();
				},
			});
		},
		attributes: function(){
			return{
				'data-color': this.model.get('color'),
				'data-registrationNumber': this.model.get('registrationNumber'),
			}
		},
		render: function(){
			var template = _.template($('#vehicleTemplate').html());
			var html = template(this.model.toJSON());
			this.$el.html(html);
			return this;
		}
});

var VehiclesView = Backbone.View.extend({
	tagName: 'ul',
	render: function(){
		var self = this;
		this.model.each(function(vehicle){
			var vehicleView = new VehicleView({ model: vehicle });
			self.$el.append(vehicleView.render().$el);
		});
	}
});


var vehicles = new Vehicles([
	new Vehicle({color: 'blue', registrationNumber: 'XLI887'}),
	new Vehicle({color: 'blue', registrationNumber: 'ZNP123'}),
	new Vehicle({color: 'gray', registrationNumber: 'XUV456'})
]);

var vehiclesView = new VehiclesView({el: '#vehicleList', model: vehicles });
vehiclesView.render();