module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			my_target: {
				files: {
					'js/output.min.js': ['js/plugins.js','js/main.js']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'css/output.css': ['css/*.css','css/**/*.css']
				}
			},
			minify: {
			    expand: true,
			    src: 'css/output.css',
			    dest: 'css/output_min.css',
			    ext: '.min.css'
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'cssmin']);

};