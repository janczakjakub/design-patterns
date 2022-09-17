import ListenerInterface from "../Listener/ListenerInterface";

export default interface EventManagerInterface {
    subscribe(listener: ListenerInterface): void;
    unsubscribe(listener: ListenerInterface): void;
    notify(eventType: string, fileName: string): void;
}
