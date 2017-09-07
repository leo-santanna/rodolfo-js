var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

    gulp.task('build', function(){
        return gulp.src('src/rodolfo.js')
            .pipe(babel({
              presets: ['es2015']
            }))
            .pipe(rename('rodolfo.min.js'))
            .pipe(uglify().on('error', function(e){
              console.log(e);
            }))
            .pipe(gulp.dest('dist'));
    });
