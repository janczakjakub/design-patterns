export default interface ListenerInterface {
    getName(): string;
    update(eventType: string, fileName: string): void;
}
