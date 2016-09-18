var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// Sassコンパイルタスク
gulp.task('sass', function(){
  gulp.src('./src/assets/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass(
      {outputStyle: 'expanded'}
    ))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', ['sass'], () => {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
