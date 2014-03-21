module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            },
            dist: {
                files: {
                    'js/<%= pkg.name %>.min.js' : 'js/src/*.js'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jshint : {
                files: '<jshint.files>',
                tasks: 'jshint'
            },
            uglify : {
                files : 'js/src/*.js',
                tasks : 'uglify'
            },
            stylus : {
                files : 'css/src/*.styl',
                tasks : 'stylus'
            }

        },
        jshint: {
            files: ['Gruntfile.js', 'js/src/*.js']
        },
        stylus : {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'css/<%= pkg.name %>.css': ['css/src/css.styl'],
                    'css/sublime.css' : 'css/src/sublime.styl',
                    'css/menu.css' : 'css/src/menu.styl'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 1080,
                    base: '.',
                    livereload: true,
                    open: 'http://localhost:1080'
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['build', 'connect', 'watch']);
    grunt.registerTask('build', ['jshint', 'uglify', 'stylus']);

};
