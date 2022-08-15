import Transport from "./Transport";
import { TransportModes } from "./TransportModes";

export default class Ship extends Transport {
    constructor() {
        super();
        this.transportModes = TransportModes.water;
    }

    public deliver(): void {
        console.log(`This transport is delivering by plane. I can go by ${this.transportModes}.\n`);
    }
}
