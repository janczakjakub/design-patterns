const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");

const appDir = "release";
const dataDir = "data";

async function prepareTask() {
    try {
        await exec(util.format('rm -rf "%s"', appDir));
        await exec(util.format('mkdir "%s"', appDir));
        await makeNewDataDir();
    } catch (e) {
        throw new Error(`Error: prepareTask :${e.message}`);
    }
}

async function makeNewDataDir() {
    if (fs.existsSync(dataDir)) {
        await exec(util.format('rm -rf "%s"', dataDir));
    }
    await exec(util.format('mkdir "%s"', dataDir));
}

exports.prepareTask = prepareTask;
