var gulp = require('gulp'),
		compass = require('gulp-compass'),
		notify = require('gulp-notify') ,
		bower = require('gulp-bower');

var config = { 
	sassPath: './sass',
	 bowerDir: './bower_components' ,
	jsDir: './js/vendor' 
}

gulp.task('bower', function() { 
	return bower() .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('css', function() {
	gulp.src(config.sassPath)
		.pipe(compass({
				config_file: 'config.rb',
				css: './',
				sass: config.sassPath
			})
		)
		.on('error', function(error) {
      // Would like to catch the error here 
      console.log(error);
      this.emit('end');
    })
		.pipe(gulp.dest('./'));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['bower', 'css']);