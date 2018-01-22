//load the plugins
require('node');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var gulp= require('gulp');

//tasks and pipelines

gulp.task('imagemin',function () {
   //task config
   var img_src = 'app/img/**/*', img_dest = 'build/images';

   gulp.src(img_src)
       .pipe(imagemin())
       .pipe(gulp.dest(img_dest));
});

gulp.task('clean', function () {
    return del(['build']);
});