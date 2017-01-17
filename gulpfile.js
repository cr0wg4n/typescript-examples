var gulp = require("gulp");
var gutil = require('gulp-util');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    var tsResult = tsProject.src()
        .pipe(tsProject()).on('error', function (error) {
            var log = gutil.log, colors = gutil.colors;
            log('Typescript compilation exited with: ' + colors.red(error));
            process.exit(1);
        });
    return tsResult.js.pipe(gulp.dest("./dist"));
});