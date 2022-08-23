import DeviceInterface from "../devices/DeviceInterface";
import RemoteControleInterface from "./RemoteControlInterface";

export default class StandardRemoteControl implements RemoteControleInterface {
    protected device: DeviceInterface;

    constructor(device: DeviceInterface) {
        this.device = device;
    }

    public power(): void {
        this.device.isEnable() ? this.device.off() : this.device.on();
    }

    public volumeUp(): void {
        let volume: number = this.device.getVolumeValue();
        this.device.setVolume(volume + 10);
    }

    public volumeDown(): void {
        let volume: number = this.device.getVolumeValue();
        this.device.setVolume(volume - 10);
    }

    public channelUp(): void {
        let channel: number = this.device.getChannel();
        this.device.setChannel(channel + 1);
    }

    public channelDown(): void {
        let channel: number = this.device.getChannel();
        this.device.setChannel(channel - 1);
    }
}
