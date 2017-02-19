/*var cristianoRonaldo = {
    name: "Cristiano Ronaldo",
    position: "LW",
    preferedFoot: "Right",
    weakFoot: 4,
    skillMoves: 5,
    overall: 94
    pace: 92,
    shooting: 92,
    passing: 81,
    dribbling: 91,
    defending: 33,
    physical: 80,
}*/

/*var lionelMessi = {
    name: "Lionel Messi",
    position: "RW",
    preferedFoot: "Left",
    weakFoot: 4,
    skillMoves: 4,
    overall: 93,
    pace: 89,
    shooting: 90,
    passing: 86,
    dribbling: 96,
    defending: 26,
    physical: 61,
}*/

/*var neymar = {
    name: "Neymar da Silva Santos Jr.",
    position: "LW",
    preferedFoot: "Right",
    weakFoot: 5,
    skillMoves: 5,
    overall: 92,
    pace: 91,
    shooting: 84,
    passing: 78,
    dribbling: 95,
    defending: 30,
    physical: 56,
}*/

function player(name, pos, foot, weakfoot, moves, overall, pac, sho, pas, dri, def, phy) {
    this.name = name;
    this.position = pos;
    this.preferedFoot = foot;
    this.weakFoot = weakfoot;
    this.skillMoves = moves;
    this.overall = overall;
    this.pace = pac;
    this.shooting = sho;
    this.passing = pas;
    this.dribbling = dri;
    this.defending = def;
    this.physical = phy;
}

var cristianoRonaldo = new player("Cristiano Ronaldo", "LW", "Right", 4, 5, 94, 92, 92, 81, 91, 33, 80);
var lionelMessi = new player("Lionel Messi", "RW", "Left", 4, 4, 93, 89, 90, 86, 96, 26, 61);
var neymar = new player("Neymar da Silva Santos Jr.", "LW", "Right", 5, 5, 92, 91, 84, 78, 95, 30, 56);
