var playerPick = prompt("Choose your unit: archers, cavalry, pikemen");

var computerPick = Math.random();
if (computerPick < 0.34) {
	computerPick = "archers";
} else if(computerPick <= 0.67) {
	computerPick = "cavalry";
} else {
	computerPick = "pikemen";
} console.log("Computer: " + computerPick);

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

compare(playerPick,computerPick);
