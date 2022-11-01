import AbstractHandler from "../AbstractHandler";
import { RequestError } from "../../chainOfResponsibility";

export default class RequestErrorHandler extends AbstractHandler {
    public handle(error: Error): string | null {
        if (error instanceof RequestError) {
            return `REQUEST ERROR: ${error.message}`;
        }

        return super.handle(error);
    }
}
