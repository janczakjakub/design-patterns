import AbstractHandler from "../AbstractHandler";
import { DatabaseError } from "../../chainOfResponsibility";

export default class DatabaseErrorHandler extends AbstractHandler {
    public handle(error: Error): string | null {
        if (error instanceof DatabaseError) {
            return `DATABASE ERROR: ${error.message}`;
        }

        return super.handle(error);
    }
}
