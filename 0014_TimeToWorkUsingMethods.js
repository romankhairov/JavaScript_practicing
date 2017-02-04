function roadTime(walk, bus52, tram, bus62) {
  this.walk = walk;
  this.bus52 = bus52;
  this.tram = tram;
  this.bus62 = bus62;
  this.calcTotalTime = function() {
      return this.walk + this.bus52 + this.tram + this.bus62;
  };
}

var roadTimeMonday = new roadTime (5,11,6,9);
var roadTimeTuesday = new roadTime (6,10,7,11);
var roadTimeWednesday = new roadTime (8,11,9,5);
var roadTimeThursday = new roadTime (5,10,7,7);
var roadTimeFriday = new roadTime (5,12,5,12);

var totalTime = roadTimeMonday.calcTotalTime() + roadTimeTuesday.calcTotalTime() + roadTimeWednesday.calcTotalTime() + roadTimeThursday.calcTotalTime() + roadTimeFriday.calcTotalTime();
var averageTime = totalTime/5;

console.log(averageTime);
