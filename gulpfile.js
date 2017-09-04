var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

//concat libs files into ONE
// gulp.task('scriptsLibConcat', function() {
//   return gulp.src(['dist/lib/*.js'])
//     .pipe(concat('lib.js'))
//     .pipe(gulp.dest('dist/js/'));
// });

//concat scss files into ONE
gulp.task('stylesLibConcat', function() {
  return gulp.src(['app/css/*.css'])
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('dist/css/'));
});

//concat controllers into ONE
gulp.task('scriptConcat', function() {
  return gulp.src(['app/js/controllers/*.js'])
    .pipe(concat('controller.js'))
    .pipe(gulp.dest('dist/js/'));
});

//concat scss files into ONE
gulp.task('stylesConcat', function() {
  return gulp.src(['app/scss/*.scss'])
    .pipe(concat('main.scss'))
    .pipe(gulp.dest('app/scss/main/'));
});

gulp.task('sass', function(){
  gulp.src('app/scss/main/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('minify', function () {
    gulp.src('app/app/controllers/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('dist/build'));
});

gulp.task('default', ['watch']);


