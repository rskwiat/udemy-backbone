define([
	'jquery',
	'underscore', 
	'backbone',
	'models/vehicles'], function($, _, Backbone, Vehicle){
	
	
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
		}
	});
	
	return VehicleView;

});


