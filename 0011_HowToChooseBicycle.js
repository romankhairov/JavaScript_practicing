
var userChoice = prompt ("Hello! Here is a program, that will help you to choose a bike. Enter your height in centimeters:");
switch(userChoice) {
    case 'userChoice >= 135 <=155':
        console.log('You need bicycle frame 14"');
        break;
    default:
        console.log("Enter your real height");
