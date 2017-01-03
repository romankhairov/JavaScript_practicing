//Function, that calculates how many minutes I have to go to the work
//It always takes 10 minutes to go to the bus stop and 5 minutes from bus stop to work
//row 4. We are creating the function  
var timeToWork = function (autobusTime) {
//	6-7 calculating the total summ and print it into console
	var timeSumm = autobusTime + 10 + 5;
	console.log(timeSumm);
}
//call function and input there how long will we go in the bus
timeToWork(30);