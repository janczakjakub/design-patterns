const util = require("util");
const exec = util.promisify(require("child_process").exec);

const appDir = "release";

async function prepareTask() {
    try {
        await exec(util.format('rm -rf "%s"', appDir));
        await exec(util.format('mkdir "%s"', appDir));
    } catch (e) {
        throw new Error(`Error: prepareTask :${e.message}`);
    }
}

exports.prepareTask = prepareTask;
