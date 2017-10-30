var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');

gulp.task('default', ['watch']);

gulp.task('watch', ['preview'], function() {
    return gulp.watch('src/**/*.apib', ['preview'])
});

gulp.task('preview', ['build'], function(cb) {
    return run('npm run preview', {verbosity: 0}).exec();
});

gulp.task('build', function() {
    return run('npm run build', {verbosity: 0}).exec();
});
