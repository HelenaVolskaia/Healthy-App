const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const path = require('path');
const gutil = require('gulp-util');

gulp.task('build-css', function () {
	var plugins = [
		autoprefixer({
			browsers: [ '> 1% in US', 'last 2 versions', 'ie 9' ]
		}),
		cssnano()
	];
	return gulp.src('./src/less/*.less')
		.pipe(plumber())
		.pipe(less({
			paths: [
				path.join(__dirname, 'src', 'less'),
				// path.join(__dirname, 'src', 'less', 'modules')
				// path.join(__dirname, 'src', 'less', 'base'),
				// path.join(__dirname, 'src', 'less', 'modules')
			]
		}))
		.on('error', function (err) {
			gutil.log(err);
			this.emit('end');
		})
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./src/styles/css')).on('error', gutil.log)
		.pipe(livereload());
});

gulp.task('watch-css', function () {
	livereload.listen();
	gulp.watch('./src/less/**/*.less', ['build-css']);
});

gulp.task('default', ['watch-css']);