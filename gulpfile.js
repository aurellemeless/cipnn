const {src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function prepareDist(cb) {
 
    src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'));

    cb();
}

exports.default = prepareDist;