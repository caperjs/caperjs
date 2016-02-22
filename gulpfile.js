var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require("gulp-rename");

gulp.task('default', function() {
    // gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('app/styles/*.scss', ['styles']);
});

gulp.task('scripts', function () {
});

gulp.task('styles', function () {
  return sass('app/styles/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('app/styles/min'));
});