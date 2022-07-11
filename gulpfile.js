const gulp = require("gulp");

const prepare = require("./gulp/tasks/prepare");
const typescript = require("./gulp/tasks/typescript");

exports.prepare = prepare.prepareTask;
exports.typescript = typescript.typescriptTask;

exports.build = gulp.series(prepare.prepareTask, typescript.typescriptTask);
