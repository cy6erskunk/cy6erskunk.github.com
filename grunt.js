/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
    },
    lint: {
      files: ['grunt.js', 'js/src/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat : {
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'js/src/*.js'],
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      lint : {
          files: '<config:lint.files>',
          tasks: 'lint qunit'
      },
      min : {
        files : 'js/src/*.js',
        tasks : 'min'
      },
      stylus : {
        files : 'css/src/*.styl',
        tasks : 'stylus'
      }

    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    stylus : {
        compile: {
            options: {
                compress: true
            },
            files: {
                'css/<%= pkg.name %>.css': ['css/src/css.styl'],
                'css/sublime.css' : 'css/src/sublime.styl'
            }
        }
    },
    server : {
        port : 1080,
        base : '.'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask('default', 'lint qunit min');
  grunt.registerTask('develop', 'server watch');

};
