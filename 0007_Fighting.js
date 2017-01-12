//This game is randomly (using Math.random) pick value of your hit
//to the rival
//Math.floor - is round a number downward to its nearest integer
//Math.random- picks random number between 0 and 1
// multyply to 2 is for definetly picking 0 or 1
var fighting = true;
var yourPunch = Math.floor(Math.random()*2);
var damageToRival = Math.floor(Math.random()*2 + 1);
var totalDamage= 0;

while (fighting) {
	//here we calculating of damage, summ it and compare to required damage for defeating the rival
    if (yourPunch) {
        console.log("You hit your rival!");
        totalDamage += damageToRival;
        if (totalDamage >= 3) {
            console.log("You win!!! Congratulations");
            fighting = false; 
            } else { 
                yourPunch = Math.floor(Math.random()*2);
            } 
    } else {
        console.log("You were defeated by your rival... Try next time.");
        //In While loop always should be variable that equals False 
        //Otherwise it can bring infinite loop
        fighting = false;
    }
}




