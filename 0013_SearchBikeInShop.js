var bike = {};
    bike.cross= {
        manufacturer: ["Cossack", "Giant", "Merida", "Romet", "Saven"],
        frameSize: "",
        countryOfOrigin: [],
        wheelsSize
    };
    bike.mtb= {
        manufacturer: ["Cossack", "Giant", "Merida", "Romet", "Saven"],
        frameSize: "",
        countryOfOrigin: [],
        wheelsSize
    };
    bike.track= {
        manufacturer: "",
        frameSize: "",
        countryOfOrigin: [],
        wheelsSize
    };
    bike.city= {
        manufacturer: "",
        frameSize: "",
        countryOfOrigin: [],
        wheelsSize
    };
    bike.junior= {
        manufacturer: "",
        frameSize: "",
        countryOfOrigin: [],
        wheelsSize
    };


var list = function(obj) {
    for (var key in obj) {
        console.log(key);
    }
};

var search = function(name) {
    for (var key in bike) {
        if (bike[key].manufacturer === name) {
            console.log(bike[key]);
            return bike[key];
        }
    }
};
list(bike);
search("Merida");
