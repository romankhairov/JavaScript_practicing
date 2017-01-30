var bike = {};
    bike.cross= {
        type: "CROSS",
        name: "CROSSWAY 900",
        frame: "ALU / Crossway TFS-D-Single",
        gear: "30 Shimano CS-HG81-10 11-34",
        weight: "12.2",
        wheelSize: "700C",
    };
    bike.mtb= {
        type: "MTB",
        name: "NINETY-SIX 9.TEAM",
        frame: "CARBON / Ninety-Six CF5",
        gear: "12 Sram XX1 12s",
        weight: "10",
        wheelSize: "29 inch",
    };
    bike.track= {
        type: "TRACK",
        name: "SCULTURA SUPERLITE LTD",
        frame: "CARBON / Scultura CF5 superlite MC",
        gear: "22 Sram Red 22 -sc",
        weight: "4.5",
        wheelSize: "700C",
    };
    bike.city= {
        type: "CITY",
        name: "CITYWAY 728 ",
        frame: "ALU / City",
        gear: "7 Shimano NEXUS 7S",
        weight: "16.5",
        wheelSize: "28 inch",
    };
    bike.junior= {
        type: "JUNIOR",
        name: "MATTS J24 TEAM-MD",
        frame: "ALU / M24 lite disc",
        gear: "8 Shimano Acera-X 8",
        weight: "13.4",
        wheelSize: "24 inch",
    };


var list = function(obj) {
    for (var key in obj) {
        console.log(key);
    }
};

var search = function(name) {
    for (var key in bike) {
        if (bike[key].type === name) {
            console.log(bike[key]);
            return bike[key];
        }
    }
};
search(("Mtb").toUpperCase());
