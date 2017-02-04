function roadTime(walk, bus52, tram, bus62) {
  this.walk = walk;
  this.bus52 = bus52;
  this.tram = tram;
  this.bus62 = bus62;
}

var roadTimeMonday = new roadTime (5,11,6,9);

roadTime.setTime = function (newTimeBus52, newTimeTram) {
  roadTime.bus52 = newTimeBus52;
  roadTime.tram = newTimeTram;
};

roadTime.setTime(10,15);

roadTime.getTotalTime = function () {
  return (roadTime.walk + roadTime.bus52 + roadTime.tram + roadTime.bus62);
};


console.log(roadTime.getTotalTime());
