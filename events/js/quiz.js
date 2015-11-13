/*
	TODO:
	
	Create a new view and append it to $el in the add() method directly. 
	This would be the same logic as you have in the render() method.

	var vehicleView = new VehicleView({ model: vehicle })
	self.$el.append(vehicleView.render().$el);

*/

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
	
	initialize: function(options){
		this.bus = options.bus;
		this.bus.on('addVehicle', this.onAdd, this);
    this.model.on('remove', this.onDelete, this);
	},
	
	onAdd: function(model){
		this.model.add(model, {at: 0});
		this.$el.empty();
		this.render();
  },
	
	render: function(){
		var self = this;
		this.model.each(function(vehicle){
			var vehicleView = new VehicleView({ model: vehicle });
			self.$el.append(vehicleView.render().$el);
		});
	}
});

var NewVehicleView = Backbone.View.extend({
	tagName: 'div',
	className: 'newVehicles',
	
	events:{
		'click .add': "onAdd"
	},
	
	initialize: function(options){
		this.bus = options.bus;
	},
	
	onAdd: function(){
		var input = $('input');
		var registrationNumber = input.val();
		input.val('');
		var newVehicle = new Vehicle({registrationNumber: registrationNumber})
		this.bus.trigger('addVehicle', newVehicle);		
	},
	
	render: function(){
		var template = _.template($('#newVehicleTemplate').html());
		this.$el.html(template);
		return this;
	}
})

var bus = _.extend({}, Backbone.Events);

var vehicles = new Vehicles([
	new Vehicle({color: 'blue', registrationNumber: 'XLI887'}),
	new Vehicle({color: 'blue', registrationNumber: 'ZNP123'}),
	new Vehicle({color: 'gray', registrationNumber: 'XUV456'})
]);

var newVehiclesView = new NewVehicleView({el: "#newVehicleForm", bus: bus});
newVehiclesView.render();

var vehiclesView = new VehiclesView({el: '#vehicleList', model: vehicles, bus: bus });
vehiclesView.render();


