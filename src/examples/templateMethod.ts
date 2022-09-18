import * as lib from "../index";

console.log("RUN database script");
const databaseScriptParam: lib.templateMethod.ScriptParamsInterface = {
    showLogs: false,
};

const databaseScript = new lib.templateMethod.ReportFromDatabaseScript();
databaseScript.run(databaseScriptParam);

console.log("\n");

console.log("RUN file script");
const fileScriptParam: lib.templateMethod.ScriptParamsInterface = {
    showLogs: true,
    delayTime: 5,
};

const fileScript = new lib.templateMethod.ReportFromFilesScript();
fileScript.run(fileScriptParam);
