var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('buildjs', function(){
    return pipeline(
        gulp.src('source/*.js'),
        uglify(),
        gulp.dest('dist')
    );
});