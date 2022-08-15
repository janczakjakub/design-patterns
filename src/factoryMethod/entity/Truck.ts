import Transport from "./Transport";
import { TransportModes } from "./TransportModes";

export default class Truck extends Transport {
    constructor() {
        super();
        this.transportModes = TransportModes.land;
    }

    public deliver(): void {
        console.log(`This transport is delivering by truck. I can go by ${this.transportModes}.\n`);
    }
}
