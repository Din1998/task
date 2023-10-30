const { src,dest,watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyle(){
  return src('./src/ui/**/*.scss')
  .pipe(sass())
  .pipe(dest('src/css'))
}

function watchTask(){
  watch(['./src/ui/**/*.scss'],buildStyle)
};

exports.default = series(buildStyle,watchTask);