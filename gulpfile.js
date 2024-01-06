// commands - gulp watch, gulp build

// plugins
const {
    src,
    dest,
    watch,
    series,
    task
} = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    replace = require('gulp-replace'),
    eslint = require('gulp-eslint'),
    styleLint = require('gulp-stylelint');

let sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify');

sass.compiler = require('node-sass');

/**************************************
 * VARS
 *************************************/

// SCSS
const scssSrc = 'scss/main.min.scss',
    scssDist = 'public_html/buddy/front/css',
    scssFiles = 'scss/**/*.scss';

// JS
const jsSrc = 'js/main.min.js',
    jsDist = 'public_html/buddy/front/js',
    jsFiles = 'js/**/*.js';

// LAYOUT
const layout = '../../views/front/layout';

/**************************************
 * DEVELOPMENT
 *************************************/

/**
 * SCSS
 */
task('scss_develop', async function () {
    return src(scssSrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(cleanCSS({
            compatibility: 'ie10'
        }))
        .pipe(dest(scssDist))
    /* .pipe(notify({
      title: 'CSS compiled',
      sound: true
    })); */
});

/**
 * JS
 */
task('js_develop', async function () {
    return src(jsSrc)
        .pipe(sourcemaps.init())
        // .pipe(babel({
        //     presets: ['@babel/preset-env']
        // }))
        .pipe(browserify({
            transform: ['babelify']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(dest(jsDist))
    /* .pipe(notify({
      title: 'JS compiled',
      sound: true
    })); */
});

/**
 * CSS, SCSS: Lint
 */
task('scssLint', async function () {
    return src([
        'scss/**/*.scss',
        'scss/**/*.css',
        // '!resources/assets/front/scss/0_plugins/*.scss',
        // '!resources/assets/front/scss/2_elements/_sprite.scss'
    ])
        .pipe(styleLint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});

/**
 * JS: Lint
 */
task('esLint', async function () {
    return src([
        'js/main.min.js',
        'js/scriptsw/*.js'
    ])
        .pipe(eslint())
        .pipe(eslint.format());
});

/**************************************
 * PRODUCTION
 *************************************/

/**
 * SASS
 */
task('scss_production', async function () {
    return src(scssSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie10'
        }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(dest(scssDist))
        .pipe(notify({
            title: 'CSS compiled',
            sound: false
        }));
});

/**
 * JS
 */
task('js_production', async function () {
    return src(jsSrc)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(browserify({
            transform: ['babelify']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(dest(jsDist))
        .pipe(notify({
            title: 'JS compiled',
            sound: false
        }));
});

/************************************
 * ASSET VERSIONS
 *************************************/
task('css_version', async function () {
    let timestamp = Date.now();
    return src(layout + '/main.blade.php')
        .pipe(replace(/css\?v=([0-9]+)/, 'css?v=' + timestamp))
        .pipe(dest(layout));
});

task('js_version', async function () {
    let timestamp = Date.now();
    return src(layout + '/main.blade.php')
        .pipe(replace(/js\?v=([0-9]+)/, 'js?v=' + timestamp))
        .pipe(dest(layout));
});

/************************************
 * WATCH TASK (DEVELOP)
 *************************************/
task('watch', async function () {
    watch(scssFiles, series('scss_develop'));
    watch(jsFiles, series('js_develop'));
});

/************************************
 * BUILD TASK (PRODUCTION)
 *************************************/
task('build', series(
    'scss_production',
    'js_production',
    // 'js_version',
    // 'css_version',
));

/************************************
 * DEFAULT
 *************************************/
task('default', series('watch'));