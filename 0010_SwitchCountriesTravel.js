var countryToTravel = prompt("Where are you going to travel?","Type your country destination here:");

switch(countryToTravel) {
  case 'Poland':
    console.log("There are a lots of interesting places in Poland!");
    break;
  case 'Germany':
    console.log("Nice choice. I would recommend you to visit Bavaria.");
    break;
  case 'Bulgaria':
    console.log("There are nice old cities and beautiful mountains.");
    break;
  default:
    console.log("I have never been there. Looking forward to see the photos from your trip!");
}
