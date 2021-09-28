var LocationTime;
(function (LocationTime) {
    LocationTime["Morning"] = "Morning";
    LocationTime["Evening"] = "Evening";
    LocationTime["Afternoon"] = "Afternoon";
})(LocationTime || (LocationTime = {}));
// type Cardirection = "LEFT_SIDE" | "RIGHT" | "FORWARD" | "REVERSE";
var Cardirection;
(function (Cardirection) {
    Cardirection["LEFT"] = "LEFT";
    Cardirection["RIGHT"] = "RIGHT";
    Cardirection["FORWARD"] = "FORWARD";
    Cardirection["REVERSE"] = "REVERSE";
})(Cardirection || (Cardirection = {}));
var Car = /** @class */ (function () {
    function Car(carConfig) {
        this.brand = carConfig.brand;
        this.color = carConfig.color;
        console.log(carConfig.isInGoodCondition(carConfig));
    }
    // Methods
    Car.prototype.start = function () {
    };
    Car.prototype.stop = function () {
    };
    Car.prototype.move = function (direction) {
    };
    // Go to particular location at given time
    // List of locaiton and time will be given in Array of Objet
    Car.prototype.goToLocation = function (locations) {
        locations.forEach(function (element) {
            console.log(element.cord.lat);
        });
    };
    return Car;
}());
var audi = new Car({
    brand: "Audi",
    color: "Red",
    accelerator: 34,
    topSpeed: 134,
    isInGoodCondition: function (value) {
        if (value.topSpeed > 100) {
            return true;
        }
        else {
            return false;
        }
    }
});
audi.goToLocation([
    {
        time: LocationTime.Afternoon,
        place: "Chennai",
        cord: {
            long: 12,
            lat: 34
        }
    }
]);
audi.start();
audi.move(Cardirection.LEFT);
audi.stop();
var bmw = new Car({
    brand: "BMW",
    color: "Red",
    accelerator: 34,
    topSpeed: 150,
    isInGoodCondition: function (value) {
        if (value.topSpeed > 300) {
            return true;
        }
        else {
            return false;
        }
    }
});
bmw.start();
bmw.move(Cardirection.FORWARD);
bmw.stop();
