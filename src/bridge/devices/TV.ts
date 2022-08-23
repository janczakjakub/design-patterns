import DeviceInterface from "./DeviceInterface";

export default class TV implements DeviceInterface {
    private isOn: boolean = false;
    private volume: number = 10;
    private channel: number = 1;

    public isEnable(): boolean {
        return this.isOn;
    }

    public on(): void {
        this.isOn = true;
    }

    public off(): void {
        this.isOn = false;
    }

    public getVolumeValue(): number {
        return this.volume;
    }

    public setVolume(value: number): void {
        if (value < 0) {
            value = 0;
        }

        if (value > 100) {
            value = 100;
        }

        this.volume = value;
    }

    public getChannel(): number {
        return this.channel;
    }

    public setChannel(value: number): void {
        if (value < 1) {
            value = 1;
        }

        this.channel = value;
    }

    public showInformation(): void {
        console.log("Device: TV");
        console.log("power: " + this.isOn);
        console.log("volume: " + this.volume);
        console.log("channel: " + this.channel + "\n");
    }
}
