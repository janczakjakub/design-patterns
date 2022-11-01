import HandlerInterface from "./HandlerInterface";

export default abstract class AbstractHandler implements HandlerInterface {
    private nextHandler: HandlerInterface;

    public setNext(handler: HandlerInterface): HandlerInterface {
        this.nextHandler = handler;

        return this.nextHandler;
    }

    public handle(data: Object): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(data);
        }

        return null;
    }
}
