gulp = require 'gulp'
coffee = require 'gulp-coffee'
watch = require 'gulp-watch'

gulp.task 'coffee', ->
  gulp.src './src/*.coffee'
    .pipe coffee {bare: true}
    # .pipe coffee()
    .pipe gulp.dest './src/'

gulp.task 'watch', ->
  gulp.watch './src/*.coffee', ['coffee']