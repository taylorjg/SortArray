const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const babel = require('gulp-babel');
const jasmineNode = require('gulp-jasmine-node');

const PATHS = {
    sourceFiles: ['src/**/*.js'],
    testFiles: ['test/**/*.js'],
    specs: ['dist/**/*.spec.js'],
    dist: 'dist'
};

PATHS.files = PATHS.sourceFiles.concat(PATHS.testFiles);

gulp.task('clean', done =>
    del(PATHS.dist, done));

gulp.task('test', _ =>
    gulp.src(PATHS.specs)
        .pipe(jasmineNode()));

gulp.task('build', _ =>
    gulp.src(PATHS.files)
        .pipe(babel())
        .pipe(gulp.dest(PATHS.dist)));

gulp.task('default', done =>
    runSequence('clean', 'build', 'test', done));
