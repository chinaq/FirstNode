gulp = require 'gulp'
coffee = require 'gulp-coffee'
watch = require 'gulp-watch'
nodemon = require 'gulp-nodemon'
coffeeFiles = ['./src/*.coffee', '*.coffee']

gulp.task 'coffee', ->
  gulp.src coffeeFiles, {base: "./"}
    .pipe coffee {bare: true}
    # .pipe coffee()
    .pipe gulp.dest './'

gulp.task 'watch', ->
  gulp.watch coffeeFiles, ['coffee']

# gulp.task 'serve', ->
gulp.task 'serve', ['watch'], ->
  options = {
    script: './src/app.coffee',
    delayTime: 1,
    # env: {'PORT': 3000},
    watch: coffeeFiles }
  nodemon(options)
    .on 'restart', (ev) ->
      console.log 'Restarting...'