'use strict';

module.exports = function (grunt) {
  
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '*.js',
        'client/**/*.js',
        'server/**/*.js',
        'test/**/*.js',
        '!server/public/**/*.js'
      ]
    },

    stylus: {
      compile: {
        options: {
          paths: ['client/**/*']
        },
        files: {
          'server/public/css/application.css': 'client/styles/application.styl'
        }
      }
    },

    jade: {
      compile: {
        options: {
          client: false,
          pretty: false
        },
        files: [ {
          cwd: 'client/',
          src: '**/*.jade',
          dest: 'server/public/html',
          expand: true,
          ext: '.html'
        } ]
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      vendor: {
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-resource/angular-resource.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-cookies/angular-cookies.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'bower_components/angular-animate/angular-animate.min.js',
          'bower_components/angular-touch/angular-touch.min.js',
          'bower_components/angular-loading-bar/build/loading-bar.min.js'
        ],
        dest: 'server/public/js/vendor.js',
      },
      application: {
        src: ['server/public/js/vendor.js', 'client/application.js', 'client/**/*.js'],
        dest: 'server/public/js/application.js'
      },
      admin: {
        src: ['server/public/js/vendor.js', 'client/admin.js', 'client/**/*.js'],
        dest: 'server/public/js/admin.js'
      }
    },

    karma: {
      once: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      },
      watch: {
        configFile: 'test/karma.conf.js'
      }
    },

    exec: {
      npmTest: 'npm test'
    },

    watch: {
      styles: {
        files: ['client/**/*.styl'],
        tasks: ['stylus']
      },
      html: {
        files: ['client/**/*.jade'],
        tasks: ['jade']
      },
      scripts: {
        files: [
          '*.js',
          'server/**/*.js',
          '!server/public/**/*.js',
          'client/**/*.js',
          'test/**/*.js'
        ],
        tasks: ['jshint:all', 'exec:npmTest', 'concat']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['stylus', 'jade', 'concat']);
};
