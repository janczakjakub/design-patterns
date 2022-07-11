import TextDeviceInterface from "./TextDeviceInterface";

export default class Keyboard implements TextDeviceInterface {
    public getInputTextDevice(): string {
        return "logitech keyboard";
    }
}
