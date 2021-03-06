/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var base = grunt.option('base') || '.';

	// Project configuration
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: port,
					base: base,
					livereload: true,
					open: true
				}
			}
		},

		watch: {
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
