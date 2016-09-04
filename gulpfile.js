"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var tslint = require('gulp-tslint');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/**/*.html',
    images: './src/images/**/*.*',
    js: './src/**/*.js',
    js_compiled: './src/js_compiled',
    ts: './src/ts/**/*.ts',
    typings: './typings',
    tsd: './typings/globals/**/*.ts',
    css: [
      'node_modules/angular-material/angular-material.css',
      './src/css/**/*.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
}

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload());
});

gulp.task('browserify', function() {
    return browserify()
    .add('./src/ts/main.ts')
    .plugin(tsify, {})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/js'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
  .pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('ts-lint', function() {
  return gulp.src(config.paths.ts)
  .pipe(tslint())
  .pipe(tslint.report());
});

gulp.task('compile-ts', function() {
  var sourceTsFiles = [
    config.paths.ts,
    config.paths.tsd];

  var tsResult = gulp.src(sourceTsFiles)
  .pipe(tsc(tsProject));

  tsResult.dts.pipe(gulp.dest(config.paths.js_compiled));
  return tsResult.js
    .pipe(gulp.dest(config.paths.js_compiled))

});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.ts, ['ts-lint', 'browserify']);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'images', 'css', 'ts-lint', 'browserify', 'open', 'watch']);
