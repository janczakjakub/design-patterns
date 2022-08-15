import * as lib from "../index";

const transportService: lib.factoryMethod.TransportService =
    new lib.factoryMethod.TransportService();

let landVehicle: lib.factoryMethod.Transport;
let airVehicle: lib.factoryMethod.Transport;
let waterVehicle: lib.factoryMethod.Transport;

try {
    console.log("transport 1");
    landVehicle = transportService.getVehicleByTransportModes(
        lib.factoryMethod.TransportModes.land
    );
    landVehicle.deliver();

    console.log("transport 2");
    airVehicle = transportService.getVehicleByTransportModes(lib.factoryMethod.TransportModes.air);
    airVehicle.deliver();

    console.log("transport 3");
    waterVehicle = transportService.getVehicleByTransportModes(
        lib.factoryMethod.TransportModes.water
    );
    waterVehicle.deliver();
} catch (error) {
    console.log(error);
}
