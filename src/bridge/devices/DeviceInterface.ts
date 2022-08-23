export default interface DeviceInterface {
    isEnable(): boolean;
    on(): void;
    off(): void;
    getVolumeValue(): number;
    setVolume(value: number): void;
    getChannel(): number;
    setChannel(value: number): void;
    showInformation(): void;
}
