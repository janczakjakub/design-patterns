import EventManager from "./EventManager/EventManager";
import EventManagerInterface from "./EventManager/EventManagerInterface";

export default class SimpleFileEditor {
    private eventManager: EventManagerInterface;

    constructor() {
        this.eventManager = new EventManager(["open", "save"]);
    }

    public getEventManager(): EventManagerInterface {
        return this.eventManager;
    }

    public openFile(fileName: string): void {
        console.log("opening file...");
        this.eventManager.notify("open", fileName);
    }

    public saveile(fileName: string): void {
        console.log("saving file...");
        this.eventManager.notify("save", fileName);
    }
}
