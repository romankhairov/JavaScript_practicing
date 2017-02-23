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

function Player(name, pos, foot, weakfoot, moves, overall, pac, sho, pas, dri, def, phy) {
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

function Goalkeeper(name, save, foot, weakfoot, moves, overall, div, han, kic, ref, spd, pos) {
    this.name = name;
    this.saveTechnique = save;
    this.preferedFoot = foot;
    this.weakFoot = weakfoot;
    this.skillMoves = moves;
    this.overall = overall;
    this.diving = div;
    this.handling = han;
    this.kicking = kic;
    this.reflexes = ref;
    this.speed = spd;
    this.position = pos;
}


var cristianoRonaldo = new Player("Cristiano Ronaldo", "LW", "Right", 4, 5, 94, 92, 92, 81, 91, 33, 80);
var lionelMessi = new Player("Lionel Messi", "RW", "Left", 4, 4, 93, 89, 90, 86, 96, 26, 61);
var neymar = new Player("Neymar da Silva Santos Jr.", "LW", "Right", 5, 5, 92, 91, 84, 78, 95, 30, 56);
var suarez = new Player("Luis Suarez", "ST", "Right", 4, 4, 92, 82, 90, 79, 87, 42, 79);

var neuer = new Goalkeeper("Manuel Neuer", "Traditional", "Right", 4, 1, 92, 89, 90, 95, 89, 60, 91);
var deGea = new Goalkeeper("David De Gea", "Acrobatic", "Right", 3, 1, 90, 88, 85, 87, 90, 56, 85);

var year = new Player("Neymar da Silva Santos Jr.", "LW", "Right", 5, 5, 92, 91, 84, 78, 95, 30, 56);



cristianoRonaldo.nationality = "Portugal";
lionelMessi.nationality = "Argentina";
neymar.nationality = "Brasil";
suarez.nationality = "Uruguay";
neuer.nationality = "Germany";
deGea.nationality = "Spain";

// Player.prototype.comparisonKick = function(cristianoRonaldo.kic, lionelMessi.kic) {
//     if (cristianoRonaldo.kic > lionelMessi.kic) {
//         console.log(cristianoRonaldo.name + " has better kick");
//       } else {
//         console.log(lionelMessi.name + " has better kick");
//       }
//     };



function St (name, overall) {
    this.name = name;
    this.overall = overall;
}

St.prototype = new Player();

var aguero = new St("Sergio Aguero", 89);
console.log(aguero.passing)
