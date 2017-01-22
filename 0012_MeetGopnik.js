var user = prompt("Some gopnik at night in the street asks you money. What will you do: FIGHT, PAY or RUN?").toUpperCase();
switch (user) {
    case "FIGHT":
        var answerBox = prompt ("Are you good in Box? Enter YES or NO").toUpperCase();
        var answerKarate = prompt ("Are you good in Karate? Enter YES or NO").toUpperCase();
        if (answerBox === "YES" || answerKarate === "YES") {
            console.log("You will beat the gopnik")
        } else {
            console.log("Think twice before fight")
        }
        break;
    case "PAY":
        var answerPhone = prompt ("You should give gopnik your smartphone? Will you do it? Enter YES or NO").toUpperCase();
        var answerCash = prompt ("You should give gopnik all of your money? Will you do it? Enter YES or NO").toUpperCase();
        if (answerPhone == "YES" && answerCash == "YES") {
            console.log("Gopnik will be happy for this. You made his day")
        } else {
            console.log("Gopnik will be angry")
        }
        break;
    case "RUN":
        var answerLocation = prompt ("Do you know good this location? Enter YES or NO").toUpperCase();
        var answerFast = prompt ("Are you fast? Enter YES or NO").toUpperCase();
        if (answerLocation === "YES" && answerFast === "YES") {
            console.log("Run as fast as possible")
        } else {
            console.log("Think twice befor running from gopnik. Gopnik is very fast")
        }
        break;
    default:
}
