//Order your beer

var beer = 0

var order = function(){
	while(beer < 5){
		console.log("One more beer, please!");
		beer = beer + 1;
	}
	
};

order();

//Tells that you have spare polygons to use at you model, during 3d modelling

 var polygonNumber = 0

var optimisation = function(){
	while(polygonNumber < 50){
		console.log("You are free to use more polygons at your model");
		polygonNumber = polygonNumber + 1;
	}
	
};

optimisation();