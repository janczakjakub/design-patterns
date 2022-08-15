import { TransportModes } from "./TransportModes";

export default abstract class Transport {
    public transportModes: TransportModes;

    abstract deliver(): void;
}
