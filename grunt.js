/*global module:false*/
module.exports = function (grunt) {

    // readOptionalJSON
    // by Ben Alman
    // https://gist.github.com/2876125
    function readOptionalJSON(filepath) {
        var data = {};
        try {
            data = grunt.file.readJSON(filepath);
            grunt.verbose.write('LOL Reading ' + filepath + '...').ok();
        } catch (e) {}
        return data;
    }

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
        jshint : {
            options : (function () {
                    return readOptionalJSON('.jshintrc') || {};
                })()
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
