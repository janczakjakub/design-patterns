import ScriptParamsInterface from "./ScriptParamsInterface";
import ScriptResultInterface from "./ScriptResultInteface";

export default abstract class AbstractScript {
    private delayExecution: number;
    private showLogs: boolean;
    private result: ScriptResultInterface;

    public run(params: ScriptParamsInterface): void {
        try {
            this.getParams(params);
            this.hookBeforeExecute();
            this.delayScriptIfIsNeeded();
            this.executeScript();
            this.hookAfterExecute();
            this.result = this.getResult();
            this.showReport();
        } catch (err) {
            console.log(err);
        }
    }

    private getParams(params: ScriptParamsInterface): void {
        this.delayExecution = params.delayTime ? params.delayTime : 0;
        this.showLogs = params.showLogs ? params.showLogs : false;

        if (this.showLogs) {
            console.log("log: Parameters have been get");
        }
    }

    protected hookBeforeExecute() {}

    private delayScriptIfIsNeeded(): void {
        if (this.delayExecution) {
            if (this.showLogs) {
                console.log("log: start delaying");
            }
            setTimeout(() => {}, this.delayExecution);
        }
    }

    protected abstract executeScript(): void;

    protected hookAfterExecute(): void {}

    protected abstract getResult(): ScriptResultInterface;

    private showReport(): void {
        if (this.showLogs) {
            console.log("log: before show report");
        }
        console.log("---------------Report---------------");
        console.log(this.result);
        console.log("------------------------------------");
    }
}
