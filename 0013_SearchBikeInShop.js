var bike = {};
    bike.cross= {
        type: "Cross",
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
        type: "Track",
        name: "SCULTURA SUPERLITE LTD",
        frame: "CARBON / Scultura CF5 superlite MC",
        gear: "22 Sram Red 22 -sc",
        weight: "4.5",
        wheelSize: "700C",
    };
    bike.city= {
        type: "City",
        name: "aa",
        frame: ["Poland"],
        gear: "",
        weight: "",
        wheelSize: "aa",
    };
    bike.junior= {
        type: "Junior",
        name: "aa",
        frame: "aa",
        gear: "",
        weight: "",
        wheelSize: "aa",
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
list(bike);
search("1254");
