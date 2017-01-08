/**
* @Author: deepak
* @Date:   2017-01-06T22:56:56+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-08T16:11:27+11:00
*/

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var jasmine = require('gulp-jasmine');

var reports =  require("./tests_helper/jasmine_reporter.js");

// Static Server + watching files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.*").on('change', browserSync.reload);
});

gulp.task('test', function(){
    gulp.src('components/form/template-spec.js')
    .pipe(jasmine({
      reporter: reports
    }));
});



gulp.task('default', ['serve']);
