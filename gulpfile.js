const { src, dest, watch, series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

function cssTask() {
  return src("src/**/*.css")
    .pipe(concat("main.css"))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest("dist"));
}

function jsTask() {
  return (
    src("src/**/*.js")
      // .pipe(concat("bundle.js"))
      .pipe(terser())
      .pipe(dest("dist"))
  );
}

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  cb();
}

function watchTask() {
  watch(
    ["*html", "src/**/*.css", "src/**/*.js"],
    series(cssTask, jsTask, browserSyncReload)
  );
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

exports.default = series(cssTask, jsTask, browserSyncServe, watchTask);
