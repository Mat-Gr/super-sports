const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

// uglify
// gulp.task('uglify', function() {
//
// });


// Sass
gulp.task('sass', function() {
    return gulp.src('source/scss/main.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/stylesheets'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "localhost/super-sports/public"
    });

    gulp.watch("source/scss/**/*.scss", ['sass']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Watch
gulp.task('watch', ['serve']);
