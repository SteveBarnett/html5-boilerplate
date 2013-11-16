module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          '**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'js/main.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: ['index.html'],
        tasks: ['htmlhint']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'js/main.js']
    },
    browser_sync: {
      files: {
        src : [
          '/stylesheets/*.css',
          '/img/*',
          '/js/*.js',
          '**/*.html'
        ],
      },
      options: {
        watchTask: true
      }
      // ,
      // host: 'dev.naga.co.za'

    },
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          // 'head-script-disabled': true,
          'style-disabled': true
        },
        src: ['index.html']
      }
    },
    uglify: {
      build: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['stylesheets/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['stylesheets/*.css']
      }
    }
  });

  // Register the default tasks.
  grunt.registerTask('default', ['browser_sync', 'watch']);

};
