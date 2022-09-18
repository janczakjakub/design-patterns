import AbstractScript from "./AbstractScript";
import ScriptResultInterface from "./ScriptResultInteface";

export default class ReportFromDatabaseScript extends AbstractScript {
    private executed: number = 0;
    private done: number = 0;

    protected executeScript(): void {
        console.log(" connecting to database server");
        console.log(" executing tasks from rows");
        console.log(" disconnect from database server");
        this.executed = 50;
        this.done = 50;
    }

    protected getResult(): ScriptResultInterface {
        return {
            executedTasks: this.executed,
            doneTasks: this.done,
        };
    }
}
