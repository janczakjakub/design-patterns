import TextDeviceInterface from "./TextDeviceInterface";

export default class IntegratedKeyboard implements TextDeviceInterface {
    public getInputTextDevice(): string {
        return "integrated keyboard";
    }
}
