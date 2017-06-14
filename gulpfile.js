var gulp = require('gulp');
var watch = require('gulp-watch');
var hercule = require('hercule');
var through = require('through2');
var docprint = require('docprint');

gulp.task('default', ['watch']);

gulp.task('watch', ['build'], function() {
    return gulp.watch('src/*.apib', ['build'])
});

gulp.task('build', ['hercule'], function(cb) {
    docprint({
        filepath: './apiary.apib',
        destination: './build'
    });

    cb();
});

gulp.task('hercule', function() {
    return gulp.src('src/apiary.apib', {buffer: false})
        .pipe(gulpHercule('src/apiary.apib'))
        .pipe(gulp.dest('./'));

    function gulpHercule(options) {
        return through.obj(function(file, encoding, callback) {
            if (file.isNull()) {
                return callback(null, file);
            }

            if (file.isBuffer()) {
                hercule.transcludeString(file.contents.toString(encoding), options, function(err, output) {
                    if (err) {
                        return callback(err, null)
                    }
                    file.contents = new Buffer(output);
                    return callback(null, file);
                });
            }

            if (file.isStream()) {
                var transcluder = new hercule.TranscludeStream(options);
                file.contents = file.contents.pipe(transcluder);

                return callback(null, file);
            }
        });
    };
});
