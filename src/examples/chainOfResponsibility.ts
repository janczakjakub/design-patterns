import * as lib from "../index";

function throwError(error: Error): void {
    try {
        throw error;
    } catch (e) {
        errorHandler.handle(e as Error);
        console.log("\n");
    }
}

const errorHandler = new lib.chainOfResponsibility.ErrorHandler();
const validationError = new lib.chainOfResponsibility.ValidationError("Invalid argument.");
const databaseError = new lib.chainOfResponsibility.DatabaseError(
    "Can't establishing a database connection."
);
const requestError = new lib.chainOfResponsibility.RequestError("Server connection timeout error.");
const genericError = new Error("Unexpected error.");

console.log("Action: throw validation error");
throwError(validationError);

console.log("Action: throw db error");
throwError(databaseError);

console.log("Action: throw request error");
throwError(requestError);

console.log("Action: throw generic error");
throwError(genericError);
