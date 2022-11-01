export default interface HandlerInterface {
    setNext(handler: HandlerInterface): HandlerInterface;
    handle(error: Object): string | null;
}
