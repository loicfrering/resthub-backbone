module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['Gruntfile.js', 'src/**/*.js', '!src/libs/**', 'tests/**/*.js']
    },
    qunit: {
      all: ['tests/**/*.html']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('default', ['test']);

};
