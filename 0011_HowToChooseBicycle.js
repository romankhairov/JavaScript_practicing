//here we are checking preferences of user
var typeOfBicycle = prompt("Hello! Here is a program, that will help you to choose a bike. What do you prefer more: SPEED, COMFORT, OFF ROAD?").toUpperCase();
  switch (typeOfBicycle) {
    case "SPEED":
        var speedA = prompt ("Let's check, does its quality plus or con for you? Very fast: does it + or - for you?");
        var speedA1;
        var speedSumm;
          if (speedA === "+") {
            speedA1 = 1
          } else {
            speedA1 = 0
          }
        var speedB = prompt ("Very light and looks cool: does it + or - for you?");
        var speedB1;
        var speedSumm;
          if (speedB === "+") {
            speedB1 = 1
          } else {
            speedB1 = 0
          }
        var speedC = prompt ("Sensitive to the quality of the road surface, which is why their use is limited: does it + or - for you?");
        var speedC1;
        var speedSumm;
          if (speedC === "+") {
            speedC1 = 1
          } else {
            speedC1 = 0
          }
        var speedD = prompt ("Impractical for everyday use. Are using for training: does it + or - for you?");
        var speedD1;
        var speedSumm;
          if (speedD === "+") {
            speedD1 = 1
          } else {
            speedD1 = 0
          }

        speedSumm = speedA1 + speedB1 + speedC1 + speedD1;

        if (speedSumm >= 1) {
          console.log("Road bicycle is good for you");
        } else {
          console.log("Think about some other type of bicycle");
        }
      break;

    case "COMFORT":
        var speedA = prompt ("Let's check, does its quality plus or con for you? Extremely comfortable seat : does it + or - for you?");
        var speedA1;
        var speedSumm;
          if (speedA === "+") {
            speedA1 = 1
          } else {
            speedA1 = 0
          }
        var speedB = prompt ("Original design, style: does it + or - for you?");
        var speedB1;
        var speedSumm;
          if (speedB === "+") {
            speedB1 = 1
          } else {
            speedB1 = 0
          }
        var speedC = prompt ("Low speed: does it + or - for you?");
        var speedC1;
        var speedSumm;
          if (speedC === "+") {
            speedC1 = 1
          } else {
            speedC1 = 0
          }
        var speedD = prompt ("Hard to use on hilly terrain and long (more than 20 km) trips : does it + or - for you?");
        var speedD1;
        var speedSumm;
          if (speedD === "+") {
            speedD1 = 1
          } else {
            speedD1 = 0
          }

        speedSumm = speedA1 + speedB1 + speedC1 + speedD1;

        if (speedSumm >= 1) {
          console.log("Cruiser bicycle is good for you");
        } else {
          console.log("Think about some other type of bicycle");
        }
          break;

    case "OFF ROAD":

      break;
    default:

  }

//here we are checking user height for choosing frame, that would be perfect fit for using
var height = prompt ("Enter your height in centimeters:");

switch(height) {
    case '135': case '136': case '137': case '138': case '139': case '140': case '141': case '142': case '143': case '144': case '145': case '146': case '147': case '148': case '149': case '150':
        console.log('With frame 14"');
        break;
    case '151': case '152': case '153': case '154': case '155': case '156': case '157': case '158': case '159': case '160': case '161': case '162': case '163': case '164': case '165':
        console.log('With frame 16"');
        break;
    case '166': case '167': case '168': case '169': case '170': case '171': case '172': case '173': case '174': case '175': case '176': case '177': case '178':
        console.log('With frame 18"');
        break;
    case '179': case '180': case '181': case '182': case '183': case '184': case '185':
        console.log('With frame 20"');
        break;
    case '186': case '187': case '188': case '189': case '190': case '192': case '193': case '194': case '195':
        console.log('With frame 22"');
        break;
    default:
        console.log('With frame 24"');
      }
