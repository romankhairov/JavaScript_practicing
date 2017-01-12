var fighting = true;
var yourPunch = Math.floor(Math.random()*2);
var damageToRival = Math.floor(Math.random()*2 + 1);
var totalDamage= 0;
while (fighting) {
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
        fighting = false;
    }
}




