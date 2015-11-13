describe("Calculator", function(){
	var calc;
	
	beforeEach(function(){
		calc = new Calculator();
	});
	
	afterEach(function(){
		
	});
	
	describe("add", function(){
		
		it("should be able to add 2 numbers.", function(){
			var result = calc.add(2, 3);
			expect(result).toEqual(5);
		});
	
		it("show throw an error if both args are not provided", function(){
			expect(function(){
				calc.add(1);
			}).toThrow();
		});
		
		it("should be called with the right arguments", function(){
			spyOn(calc, "add").and.throwError("Some Error");
			expect(function(){
				var result = calc.add(2,5);
			}).toThrowError("Some Error")
		});
			
	});


});