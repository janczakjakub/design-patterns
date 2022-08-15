import Transport from "./Transport";
import { TransportModes } from "./TransportModes";

export default class Plane extends Transport {
    constructor() {
        super();
        this.transportModes = TransportModes.air;
    }

    public deliver(): void {
        console.log(`This transport is delivering by plane. I can go by ${this.transportModes}.\n`);
    }
}
