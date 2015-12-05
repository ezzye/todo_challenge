module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
    scripts: {
      files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      tasks: ['jshint'],
      options: {
        spawn: false,
      },
    },
  },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    }
  });

  // on watch events configure jshint:all to only run on changed file
grunt.event.on('watch', function(action, filepath) {
  grunt.config('jshint.all', filepath);
});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['jshint']);
};