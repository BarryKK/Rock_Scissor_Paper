const gulp = require("gulp");

//Logs Message
gulp.task("message", function(done) {
  console.log("Gulp is running...");
  done();
});

//copy all html files
gulp.task("copyhtml", function() {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

//copy all css files
gulp.task("copycss", function() {
  return gulp.src("src/css/*.css").pipe(gulp.dest("dist"));
});

//copy all css files
gulp.task("copyjs", function() {
  return gulp.src("src/js/*.js").pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("message", "copyhtml", "copycss", "copyjs"));
