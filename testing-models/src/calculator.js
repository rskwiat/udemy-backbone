var Calculator = function(){
	var add = function(a,b){
		if(!a || !b)
			throw new Error("Cannot Add One Number");
		return a + b;
	}
	
	return{
		add: add
	}
}