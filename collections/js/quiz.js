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

var Cars = Backbone.Collection.extend({
  model: Car
});

var car = new Cars([
  new Car({	color: 'blue', registrationNumber: 'XLI887'}),
  new Car({	color: 'blue', registrationNumber: 'ZNP123'}),
  new Car({	color: 'gray', registrationNumber: 'XUV456'})
]);

var blueCars = car.where({color: "blue"});
console.log('Blue Cars: ', blueCars);

var specificVin = car.where({registrationNumber:'XLI887'});
console.log('Car with registration number: XLI887: ', specificVin);

car.remove(specificVin);

console.log('Car Collection:', car.toJSON());

car.each(function(car){
  console.log(car);
})
