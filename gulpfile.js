const { src, dest, parallel, series, watch } = require('gulp');

// Load plugins
const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

// Clear build folder

function clear() {
   return src('build/*', {
      read: false
   }).pipe(clean());
}

// CSS

function compileSass() {
   const source = './src/styles/scss/**/*.scss'; // Path to your SCSS files
   return src(source).pipe(sass().on('error', sass.logError)).pipe(dest('./src/styles/css'));
}

// .pipe(changed(source))

// gulp.task('sass', compileSass);

function css() {
   const source = './src/styles/css/**/*.css';
   return src(source)
      .pipe(changed(source))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: true,
            grid: false,
            ignoreUnknownVersions: false
         })
      )
      .pipe(cssnano())
      .pipe(dest('./build/css'))
      .pipe(browsersync.stream());
}

// Optimize images

function img() {
   return src('./src/images/**').pipe(imagemin()).pipe(dest('./build/images'));
}

// html

function html() {
   return src('./src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(dest('./build'))
      .pipe(browsersync.stream());
}

// compress javascript

function javascript() {
   return src('./src/js/*.js')
      .pipe(
         minify({
            noSource: true,
            ext: {
               min: '.js'
            }
         })
      )
      .pipe(dest('./build/js'));
}

// watch files

function watchFiles() {
   watch('./src/*.html', html);
   watch('./src/css/*', css);
   watch('./src/*.js', javascript);
   watch('./src/images/*', img);
}

// browsersync

function browserSync() {
   browsersync.init({
      server: {
         baseDir: './build'
      },
      port: 3000
   });
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, compileSass, css, img, javascript));
exports.javascript = javascript;
exports.css = css;
