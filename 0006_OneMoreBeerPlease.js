var beer = 0

var order = function(){
	while(beer < 5){
		console.log("One more beer, please!");
		beer = beer + 1;
	}
	
};

order();