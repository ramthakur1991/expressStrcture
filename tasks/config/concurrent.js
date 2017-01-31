/**
 * run-server-concurrent grunt task
 *
 * ---------------------------------------------------------------
 *
 * This task is used to run the express server
 * using grunt concurrent task with nodemon and watch
 * server and restart if any error occurs.
 * 
 */

module.exports = function(grunt) {
  
  grunt.config.set('concurrent', {
    // configure nodemon
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
  });
  // load concurrent
  grunt.loadNpmTasks('grunt-concurrent');
};