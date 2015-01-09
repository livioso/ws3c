var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var paths = {
  sass: './project/sass/**/*.scss',
  css: './project/css/'
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
  .pipe(sass())
  .pipe(concat('all.min.css'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(gulp.dest(paths.css))
  .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
