
//Install
// npm install browser-sync gulp --save-dev

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var reload      = browserSync.reload;


gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./index.html","./**/*.js","./**/*.html"]).on("change", reload);
});