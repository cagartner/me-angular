'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');

gulp.task('js', function () {
    gulp.src(['src/js/**/app.js', 'src/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', ['js','css'], function () {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.scss', ['css']);
});
