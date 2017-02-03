var roadTime = new Object ();
roadTime.walk = 10;
roadTime.bus52 = 5;
roadTime.tram = 5;
roadTime.bus62 = 10;

roadTime.setTime = function (newTimeBus52, newTimeTram) {
  roadTime.bus52 = newTimeBus52;
  roadTime.tram = newTimeTram;
};

roadTime.getTotalTime = function () {
  return (roadTime.walk + roadTime.bus52 + roadTime.tram + roadTime.bus62);
};


getTotalTime(10,15);
console.log(roadTime.getTotalTime());
