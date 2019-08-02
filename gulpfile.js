'use strict';
/**
  * @gulpfile for {Anechka}
  * @version 2.5 (31.07.2019)
  */

const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');

function scssCompile () {
  return src('app/scss/main.scss')
        .pipe(sass({ noCache: true, style: 'compressed' }).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(dest('dist'))
}

function jsCompile () {
  return src('app/js/main.js')
        .pipe(concat('main.js'))
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

function watchFiles () {
  syncBrowsers();

  /* WATCH HTML */
  watch('index.html').on('change', browserSync.reload);

  /* WATCH STYLES */
  watch('app/scss/**/*.scss').on('change', scssCompile);
  watch('dist/main.css').on('change', browserSync.reload);

  /* WATCH JS */
  watch('app/js/main.js').on('change', jsCompile);
}

exports.watch = series(clean, parallel(scssCompile, jsCompile), watchFiles);
