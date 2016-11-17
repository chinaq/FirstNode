gulp = require 'gulp'
coffee = require 'gulp-coffee'
watch = require 'gulp-watch'
nodemon = require 'gulp-nodemon'
coffeeFiles = ['./src/**/*.coffee', './*.coffee']

# compile coffee to js
gulp.task 'coffee', ->
  gulp.src coffeeFiles, {base: "./"}
    .pipe coffee {bare: true}
    .pipe gulp.dest './'

# watch *.coffee
gulp.task 'watch', ->
  gulp.start 'coffee'
  gulp.watch coffeeFiles, ['coffee']

# serve and watch
gulp.task 'serve', ['watch'], ->
  options = {
    script: './src/app.coffee',
    delayTime: 1,
    # env: {'PORT': 3000},
    watch: './src' }
  nodemon(options)
    .on 'restart', (ev) ->
      console.log 'Restarting...'


# gulp.task 'inject', ->
#   wiredep = require('wiredep').stream
#   options = {
#     bowerJson: require './bower.json'
#     directory: './public/lib',
#     ignorePath: '../../public' }
#   gulp.src './src/views/.*pug'
#     .pipe wiredep options
#     .pipe gulp.dest './src/views'