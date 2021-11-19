// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');

// Compile Our Sass
gulp.task('sass', function () {
	return gulp.src('assets/components/core/**/**.sass')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(['assets/sass/**/*'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);