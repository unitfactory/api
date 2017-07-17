var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');
var hercule = require('hercule');
var through = require('through2');

gulp.task('default', ['watch']);

gulp.task('watch', ['build'], function() {
    return gulp.watch('src/*.apib', ['build'])
});

gulp.task('build', ['hercule'], function(cb) {
    return run('npm run build', {verbosity: 0}).exec();
});

gulp.task('hercule', function() {
    return gulp.src('src/apiary.apib', {buffer: false})
        .pipe(gulpHercule('src/apiary.apib'))
        .pipe(gulp.dest('./'));

    function gulpHercule(options) {
        return through.obj(function(file, encoding, callback) {
            var transcluder = new hercule.TranscludeStream(options);
            file.contents = file.contents.pipe(transcluder);

            return callback(null, file);
        });
    };
});
