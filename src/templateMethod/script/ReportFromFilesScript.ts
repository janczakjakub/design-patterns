import AbstractScript from "./AbstractScript";
import ScriptResultInterface from "./ScriptResultInteface";

export default class ReportFromFilesScript extends AbstractScript {
    private executed: number = 0;
    private done: number = 0;
    private startTime: number;

    protected executeScript(): void {
        console.log(" connecting to ftp server");
        console.log(" executing tasks from files");
        console.log(" disconnect from ftp server");
        this.executed = 15;
        this.done = 12;
    }

    protected getResult(): ScriptResultInterface {
        return {
            executedTasks: this.executed,
            doneTasks: this.done,
        };
    }

    protected hookBeforeExecute() {
        this.startTime = performance.now();
    }

    protected hookAfterExecute(): void {
        const time: number = performance.now() - this.startTime;
        console.log(` execution time ${time.toFixed(2)} miliseconds`);
    }
}
