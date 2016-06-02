/**
  * Antoine lin
  * antoine@lin.fr
  *
  * Work with Gulp
  *
  * Copyright 2016
  * Released under the MIT license
  *
  * Date of creative : 2016-06-01
  * Last updated : 2016-06-02
*/

'use strict';

// Variables
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso   = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    inline = require('gulp-inline-source'),
    cssbeautify = require('gulp-cssbeautify'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    uglify = require('gulp-uglify'),
    bc     = './bower_components/',
    web    = './web/',
    vendor = web+'vendor/',
    build  = web+'build/',
    assets = build+'assets/',
    src    = web+'src/',
    img    = src+'assets/img/',
    vids    = src+'assets/vids/';

// Task JS
gulp.task('js', function() {
  gulp.src(src+'**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(build+'js/'))
});

// Task sass
gulp.task('sass', function () {
  gulp.src(src+'**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer({
        browser: '> 98%'
      }))
      .pipe(csso())
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(build+'css/'))
});

// task watch
gulp.task('watch', function() {
  livereload.listen({start: true});
  gulp.watch('app/Resources/**').on('change', livereload.changed);
  gulp.watch('app/config/**').on('change', livereload.changed);
  gulp.watch('src/**').on('change', livereload.changed);
  gulp.watch('web/src/**').on('change', livereload.changed);

  gulp.watch(src+'**/*.js', ['js']);
  gulp.watch(src+'**/*.scss', ['sass']);

  gulp.watch(bc+'**/*.js', ['js']);
  gulp.watch(bc+'**/*.scss', ['sass']);
});

// Task images
gulp.task('img', function(){
  gulp.src(img+'**')
    .pipe(imagemin())
    .pipe(gulp.dest(assets+'img/'))
});

// Task font
gulp.task('vids', function(){
  gulp.src(vids+'**')
    .pipe(imagemin())
    .pipe(gulp.dest(assets+'vids/'))
});

// Dev
gulp.task('default', [
  'js',
  'sass',
  'watch',
  'img'
]);
