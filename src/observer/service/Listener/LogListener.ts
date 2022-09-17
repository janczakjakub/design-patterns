import ListenerInterface from "./ListenerInterface";

export default class LogListener implements ListenerInterface {
    public getName(): string {
        return "Logger";
    }
    public update(eventType: string, fileName: string): void {
        console.log("Logger:");
        console.log(`File ${fileName} has been ${eventType}`);
    }
}
