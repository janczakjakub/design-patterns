import DisplayInterface from "./DisplayInterface";

export default class BuiltInMonitor implements DisplayInterface {
    public getDisplay(): string {
        return "msi display";
    }
}
