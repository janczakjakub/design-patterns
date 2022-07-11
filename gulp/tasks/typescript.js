const spawn = require("child_process").spawn;

function doCompileTypescript(done) {
    const cmd = spawn(process.execPath, ["node_modules/.bin/tsc"], {});

    cmd.stdout.on("data", function (data) {
        process.stdout.write(data);
    });
    cmd.stderr.on("data", function (data) {
        process.stderr.write(data);
    });
    cmd.on("close", function (code) {
        if (code > 0) {
            process.exit(1);
        }
        done();
    });
}

function typescriptTask(done) {
    doCompileTypescript(done);
}

exports.doCompileTypescript = doCompileTypescript;
exports.typescriptTask = typescriptTask;
