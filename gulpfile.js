/**
* @Author: deepak
* @Date:   2017-01-06T22:56:56+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-08T19:22:30+11:00
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jasmine = require('gulp-jasmine');
var reports =  require("./tests_helper/jasmine_reporter.js");

// Static Server + watching files
gulp.task('serve',['test'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./components/**/*.*", ['test']);
    gulp.watch("./components/**/*.*").on('change', browserSync.reload);
});

gulp.task('test', function(){
    gulp.src('components/**/*-spec.js')
    .pipe(jasmine({
      reporter: reports
    }));
});



gulp.task('default', ['serve']);
