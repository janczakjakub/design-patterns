import AbstractHandler from "../AbstractHandler";
import { ValidationError } from "../../chainOfResponsibility";

export default class ValidationErrorHandler extends AbstractHandler {
    public handle(error: Error): string | null {
        if (error instanceof ValidationError) {
            return `VALIDATION ERROR: ${error.message}`;
        }

        return super.handle(error);
    }
}
