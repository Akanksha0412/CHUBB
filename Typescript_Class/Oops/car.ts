interface CarConfig {
    brand: string,
    color: string,
    accelerator: number,
    topSpeed?: number,
    isInGoodCondition(value: CarConfig): boolean
}

interface CarLocation {
    time : LocationTime,
    place : string,
    cord : {
        lat:number,
        long:number
    }
}

enum LocationTime {
    Morning = "Morning",
    Evening = "Evening",
    Afternoon = "Afternoon"
}

// type Cardirection = "LEFT_SIDE" | "RIGHT" | "FORWARD" | "REVERSE";

enum Cardirection {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    FORWARD = "FORWARD",
    REVERSE = "REVERSE"
}

class Car { // Blue Print
    // Property
    brand;
    color;
    accelerator;
    topSpeed;

    constructor(carConfig: CarConfig) { // Runs only one time
        this.brand = carConfig.brand;
        this.color = carConfig.color;
        console.log(carConfig.isInGoodCondition(carConfig))
    }

    // Methods
    start() {

    }

    stop() {

    }

    move(direction: Cardirection) {

    }

    // Go to particular location at given time
    // List of locaiton and time will be given in Array of Objet
    goToLocation(locations:Array<CarLocation>){
        locations.forEach(element => {
            console.log(element.cord.lat)
        });
    }
}

let audi = new Car({
    brand: "Audi",
    color: "Red",
    accelerator: 34,
    topSpeed: 134,
    isInGoodCondition: (value) => {
        if (value.topSpeed > 100) {
            return true
        } else {
            return false
        }
    }
});







audi.goToLocation([
    {
        time : LocationTime.Afternoon,
        place : "Chennai",
        cord : {
            long : 12,
            lat : 34
        }
    }
])















audi.start();
audi.move(Cardirection.LEFT)
audi.stop();

let bmw = new Car({
    brand: "BMW",
    color: "Red",
    accelerator: 34,
    topSpeed: 150,
    isInGoodCondition: (value) => {
        if (value.topSpeed > 300) {
            return true
        } else {
            return false
        }
    }
});

bmw.start();
bmw.move(Cardirection.FORWARD)
bmw.stop();