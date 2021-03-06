var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('Hello-world', function () {
    console.log('Our first hello world gulp task');
});
gulp.task('vet', function () {
   gulp.src([
       './src/**/*.js',
       './*.js'
   ])
       .pipe(jscs())
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});
