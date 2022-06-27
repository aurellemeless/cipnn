const {src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

function prepareDist(cb) {
 
    src('./js/*.js')
    .pipe(concat('cipnn.js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'));

    cb();
}

exports.default = prepareDist;