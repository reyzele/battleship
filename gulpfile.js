const gulp = require("gulp");

const $gp = require("gulp-load-plugins")();

const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const SRC_DIR = "build";
const DIST_DIR = "build/";

gulp.task("scripts", () => {
  return gulp
    .src(`${SRC_DIR}/js/src/main.js`)
    .pipe($gp.webpack(webpackConfig, webpack))
    .pipe(gulp.dest(`${DIST_DIR}/js`))
    .pipe(reload({ stream: true }));
});

gulp.task("watch", () => {
  gulp.watch(`${SRC_DIR}/js/src/**/*.js`, gulp.series("scripts"));
});

gulp.task("server", () => {
  browserSync.init({
    server: `${DIST_DIR}`
  });
  browserSync.watch(`${DIST_DIR}/**/*.*`, browserSync.reload);
});

// GULP:RUN
gulp.task(
  "default",
  gulp.series(gulp.parallel("scripts"), gulp.parallel("watch", "server"))
);
