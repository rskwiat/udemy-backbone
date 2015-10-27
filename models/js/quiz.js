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

var Car = Vehicle.extend({
	start: function(){
		console.log('Car with registration number',
			this.get('registrationNumber'), 'started');
	}
});

var car = new Car({
	color: 'blue',
  registrationNumber: 'XLI887'
});

car.start();
car.unset('registrationNumber')
if (!car.isValid())
	console.log(car.validationError);

car.set('registrationNumber', 'XLI887')
if(car.isValid())
	console.log('car is registered');
else
	console.log(car.validationError);
