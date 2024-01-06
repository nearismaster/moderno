const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

function sassTask(done) {
    const processors = [autoprefixer()];
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
}

gulp.task('style', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))  // Используйте gulp-clean-css
        .pipe(gulp.dest('app/css'))
});

gulp.task('script', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

function htmlTask(done) {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }));
}

function jsTask(done) {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }));
}

function browserSyncTask(done) {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        injectChanges: true,
        files: ['app/css/*.css', 'app/js/*.js', 'app/*.html'],
        reloadDelay: 1000,
        online: true,
        open: false,
        host: '0.0.0.0',
        port: 3000
    });
    done();
}

function watchTask() {
    gulp.watch('app/scss/**/*.scss', sassTask);
    gulp.watch('app/*.html', htmlTask);
    gulp.watch('app/js/*.js', jsTask);
}

gulp.task('sass', sassTask);
gulp.task('html', htmlTask);
gulp.task('js', jsTask);
gulp.task('browser-sync', browserSyncTask);
gulp.task('watch', watchTask);

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'browser-sync', 'watch'));

// Fancybox.bind("[data-fancybox]"{
//    // индивидуальные параметры
// });
