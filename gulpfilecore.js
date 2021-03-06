var coffee, coffeeFiles, gulp, nodemon, watch;

gulp = require('gulp');

coffee = require('gulp-coffee');

watch = require('gulp-watch');

nodemon = require('gulp-nodemon');

coffeeFiles = ['./src/**/*.coffee', './*.coffee'];

gulp.task('coffee', function() {
  return gulp.src(coffeeFiles, {
    base: "./"
  }).pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.start('coffee');
  return gulp.watch(coffeeFiles, ['coffee']);
});

gulp.task('serve', ['watch'], function() {
  var options;
  options = {
    script: './src/app.coffee',
    delayTime: 1,
    watch: './src'
  };
  return nodemon(options).on('restart', function(ev) {
    return console.log('Restarting...');
  });
});
