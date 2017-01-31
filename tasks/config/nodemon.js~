/**
 * run-server grunt task
 *
 * ---------------------------------------------------------------
 *
 * This task is used to run the express server
 * using grunt task with grunt-nodemon
 * 
 */

module.exports = function(grunt) {
  grunt.config.set('nodemon', {
    // configure nodemon
      dev: {
        script: 'server.js',
	options: {
		env: {
			NODE_ENV : "development"
	      	},	
	}
      }
  });
  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');
};
