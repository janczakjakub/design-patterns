import { TransportModes } from "../entity/TransportModes";
import Transport from "../entity/Transport";
import Plane from "../entity/Plane";
import Ship from "../entity/Ship";
import Truck from "../entity/Truck";

export default class TransportService {
    public getVehicleByTransportModes(transportModes: TransportModes): Transport {
        switch (transportModes) {
            case TransportModes.land:
                return new Truck();
            case TransportModes.air:
                return new Plane();
            case TransportModes.water:
                return new Ship();
            default:
                throw new Error("Unknown transport mode");
        }
    }
}
