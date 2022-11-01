import HandlerInterface from "../HandlerInterface";
import DatabaseErrorHandler from "./DatabaseErrorHandler";
import RequestErrorHandler from "./RequestErrorHandler";
import ValidationErrorHandler from "./ValidationErrorHandler";

export default class ErrorHandler {
    private validationErrorHandler: HandlerInterface;
    private databaseErrorHandler: HandlerInterface;
    private requestErrorHandler: HandlerInterface;

    constructor() {
        this.validationErrorHandler = new ValidationErrorHandler();
        this.databaseErrorHandler = new DatabaseErrorHandler();
        this.requestErrorHandler = new RequestErrorHandler();
        this.setChain();
    }

    private setChain(): void {
        this.validationErrorHandler
            .setNext(this.databaseErrorHandler)
            .setNext(this.requestErrorHandler);
    }

    public handle(error: Error): void {
        const message: string | null = this.validationErrorHandler.handle(error);
        if (message !== null) {
            console.log(message);
        } else {
            console.log(error.message);
        }
    }
}
