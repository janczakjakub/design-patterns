import ListenerInterface from "./ListenerInterface";

export default class EmailListener implements ListenerInterface {
    public getName(): string {
        return "Email";
    }
    public update(eventType: string, fileName: string): void {
        console.log("Sent an email with content:");
        const eventName: string = eventType === "open" ? "opened" : "saved";
        console.log(`CheckFile ${fileName}, it's been ${eventName}`);
    }
}
