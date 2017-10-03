var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');
var hercule = require('hercule');
var through = require('through2');

gulp.task('default', ['watch']);

gulp.task('watch', ['build'], function() {
    return gulp.watch('src/*.apib', ['build'])
});

gulp.task('preview', ['build'], function(cb) {
    return run('npm run preview', {verbosity: 0}).exec();
});

gulp.task('build', function() {
    return run('npm run build', {verbosity: 0}).exec();
});
