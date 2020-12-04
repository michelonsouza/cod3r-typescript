const {series, parallel, src, dest} = require('gulp');
const del = require('del');
const broserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

function clearDist() {
  return del(['dist']);
}

function htmlCopy() {
  return src('public/**/*').pipe(dest('dist'));
}

function generateJS(callback) {
  callback()
}

exports.default = series(
  clearDist,
  parallel(
    generateJS,
    htmlCopy,
  ),
);