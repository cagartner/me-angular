'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.scss', ['css']);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('js', function () {
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/tether/dist/js/tether.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'src/js/**/app.js',
        'src/js/**/*.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('css', function () {
  return gulp.src('src/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
});

gulp.task('watch', ['js','css'], function () {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.scss', ['css']);
});
