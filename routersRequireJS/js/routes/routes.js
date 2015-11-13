define([
	'jquery',
	'underscore', 
	'backbone',
	'views/vehicles'], function($, _, Backbone, vehiclesView){
	
	var AppRouter = Backbone.Router.extend({
			
		routes:{
			'cars': 'viewCars',
			'boats': 'viewBoats',
			'*other': 'defaultRoute'
		},
	
		viewCars: function(){
			var vehiclesView = new VehiclesView({el: '#content', model: cars });
			vehiclesView.render();
		},
		
		viewBoats: function(){
			var vehiclesView = new VehiclesView({el: '#content', model: boats });
			vehiclesView.render();
		},
		
		defaultRoute: function(){
			var view = new HomeView({el: '#content'});
			view.render();
		},
		
		loadView : function(view) {
			this.view && this.view.remove();
			this.view = view;
			console.log(view);
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

});

