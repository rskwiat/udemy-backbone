describe("Song", function(){
	var song;
	
	beforeEach(function(){
		song = new Song();
	})
	
	it("url Root should be api/songs", function(){
		expect(song.url).toEqual("/api/songs");
	});
	
	it("Number of plays attribute should be 0 by defaut", function(){
		expect(song.get("numberOfPlays")).toEqual(0);
	});
	
	it("title is required", function(){
		expect(song.isValid()).toBeFalsy();
		song.set("title", "Blue in Green");
		expect(song.isValid()).toBeTruthy();
	});
	
	it("Plays should increase", function(){
		song.play();
		
		expect(song.get("numberOfPlays")).toEqual(1);
	});
	
});