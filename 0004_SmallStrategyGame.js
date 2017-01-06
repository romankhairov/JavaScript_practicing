//this is small strategy compare game. The analogy with "Rock, Paper and Scissors"
//you should to choose your unit. In a few seconds you will know who is stronger in this battle
//first is player choose
var playerPick = prompt("Choose your unit: archers, cavalry, pikemen");

//below we use computer choose, based on random value, apply to 3 ranges between 0...1 three units. And log it into console
var computerPick = Math.random();
if (computerPick < 0.34) {
	computerPick = "archers";
} else if(computerPick <= 0.67) {
	computerPick = "cavalry";
} else {
	computerPick = "pikemen";
} console.log("Computer: " + computerPick);

//below we are comparing our picks using function with two parameters and if/else statement
var compare = function(choice1, choice2) {
if (choice1 === choice2) {
    return "You picked the same units. Please, try again";
    }
else if (choice1 === "archers"){
        if(choice2 === "pikemen") {
            return "archers win";
        }
        else{
            return "cavalry wins";
        }
    }
else if (choice1 === "pikemen"){
        if(choice2 === "cavalry") {
            return "pikemen win";
        }
        else{
            return "archers win";
        }
    }
else if (choice1 === "cavalry"){
        if(choice2 === "archers") {
            return "cavalry wins";
        }
        else{
            return "pikemen win";
        }
    }
};

//below we call our function
compare(playerPick,computerPick);