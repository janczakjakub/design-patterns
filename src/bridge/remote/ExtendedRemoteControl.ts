import DeviceInterface from "../devices/DeviceInterface";
import StandardRemoteControl from "./StandardRemoteControl";

export default class ExtendedRemoteControl extends StandardRemoteControl {
    constructor(device: DeviceInterface) {
        super(device);
    }

    public mute(): void {
        this.device.setVolume(0);
    }

    public setRandomChanel(): void {
        this.device.setChannel(Math.floor(Math.random() * 100) + 1);
    }
}
