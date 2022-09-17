import EventManagerInterface from "./EventManagerInterface";
import ListenerInterface from "../Listener/ListenerInterface";

export default class EventManager implements EventManagerInterface {
    private operationNames: Set<string> = new Set();
    private listeners: Map<string, ListenerInterface> = new Map();

    constructor(operations: string[]) {
        operations.forEach((operation) => {
            this.operationNames.add(operation);
        });
    }

    public subscribe(listener: ListenerInterface): void {
        this.listeners.set(listener.getName(), listener);
    }

    public unsubscribe(listener: ListenerInterface): void {
        this.listeners.delete(listener.getName());
    }

    public notify(eventType: string, fileName: string): void {
        this.listeners.forEach(
            (listener: ListenerInterface, name: string, map: Map<string, ListenerInterface>) => {
                console.log(`notify ${name}`);
                listener.update(eventType, fileName);
            }
        );
    }
}
