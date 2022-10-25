import * as lib from "../index";

class VehicleClient {
    private vehicleFactory: lib.flyweight.FlyweightFactory;

    constructor() {
        this.vehicleFactory = new lib.flyweight.FlyweightFactory([
            ["Volkswagen", "Golf", "gray"],
            ["Audi", "A6", "black"],
            ["Mazda", "CX5", "red"],
            ["Ford", "Focus", "blue"],
            ["Ford", "Focus", "green"],
        ]);
        this.vehicleFactory.showFlyweightList();
    }

    public addVehicleToDatabase(
        registrationNumber: string,
        owner: string,
        brand: string,
        model: string,
        color: string
    ): void {
        console.log("Adding a vehicle to database.");
        const flyweight = this.vehicleFactory.getFlyweight([brand, model, color]);

        flyweight.operation([registrationNumber, owner]);
        console.log("\n----------------------------------------------------------\n");
    }
}

const vehicleClient = new VehicleClient();
vehicleClient.addVehicleToDatabase("XYZ123", "Jan Nowak", "Ford", "Focus", "green");
vehicleClient.addVehicleToDatabase("XYZ123", "Jan Nowak", "Ford", "Focus", "red");
