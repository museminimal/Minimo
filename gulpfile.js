'use strict';
/**
  * @gulpfile for {Anechka}
  * @version 2.0
  */

const { gulp, src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');

function scssCompile () {
  return src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(dest('dist'))
}

function clean () {
  return del('dist');
}

function syncBrowsers () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false,
    port: 3000,
    open: false
  });
}

function watchFiles (done) {
  syncBrowsers();

  /* WATCH HTML */
  watch('index.html').on('change', browserSync.reload);

  /* WATCH STYLES */
  watch('app/scss/**/*.scss').on('change', scssCompile);
  watch('dist/css/**/*.css').on('change', browserSync.reload);
  done();
}

exports.watch = series(clean, scssCompile, watchFiles);
