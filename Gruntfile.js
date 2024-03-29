// Generated on 2013-11-18 using generator-webapp 0.4.4
// And heavily modified since then
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// configurable paths
		yeoman: {
			app: 'app',
			dist: 'dist'
		},
		watch: {
			options: {
				nospawn: false
			},
			compass: {
				files: ['<%= yeoman.app %>/assets/css/{,*/}*.{scss,sass}'],
				tasks: ['compass:server']
			},
			styles: {
				files: ['<%= yeoman.app %>/assets/css/{,*/}*.css'],
				tasks: ['copy:styles']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/*.html',
					'.tmp/assets/css/{,*/}*.css',
					'{.tmp,<%= yeoman.app %>}/assets/js/{,*/}*.js',
					'<%= yeoman.app %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
				]
			}
		},
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= yeoman.dist %>',
					livereload: false
				}
			}
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/assets/js/{,*/}*.js',
				'!<%= yeoman.app %>/assets/js/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
				}
			}
		},
		compass: {
			options: {
				sassDir: '<%= yeoman.app %>/assets/css',
				cssDir: '.tmp/assets/css',
				generatedImagesDir: '.tmp/assets/images/generated',
				imagesDir: '<%= yeoman.app %>/assets/images',
				javascriptsDir: '<%= yeoman.app %>/assets/js',
				fontsDir: '<%= yeoman.app %>/assets/fonts',
				//importPath: '<%= yeoman.app %>/bower_components',
				httpImagesPath: '/assets/images',
				httpGeneratedImagesPath: '/assets/images/generated',
				httpFontsPath: '/assets/fonts',
				relativeAssets: false,
				assetCacheBuster: false
			},
			dist: {
				options: {
					generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated'
				}
			},
			server: {
				options: {
					debugInfo: true,
					outputStyle: 'expanded'
				}
			}
		},

		//autoprefixer: {
		//	options: {
		//		browsers: ['last 1 version']
		//	},
		//	dist: {
		//		files: [{
		//			expand: true,
		//			cwd: '.tmp/assets/css/',
		//			src: '{,*/}*.css',
		//			dest: '.tmp/assets/css/'
		//		}]
		//	}
		//},

		'bower-install': {
			app: {
				html: '<%= yeoman.app %>/index.html',
				ignorePath: '<%= yeoman.app %>/'
			}
		},

		//rev: {
		//	dist: {
		//		files: {
		//			src: [
		//				'<%= yeoman.dist %>/assets/js/{,*/}*.js',
		//				'<%= yeoman.dist %>/assets/css/{,*/}*.css',
		//				'<%= yeoman.dist %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
		//				'<%= yeoman.dist %>/assets/fonts/{,*/}*.*'
		//			]
		//		}
		//	}
		//},

		useminPrepare: {
			options: {
				dest: '<%= yeoman.dist %>'
			},
			html: '<%= yeoman.app %>/index.html'
		},

		usemin: {
			options: {
				assetsDirs: ['<%= yeoman.dist %>']
			},
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/assets/css/{,*/}*.css']
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/assets/images',
					src: '{,*/}*.{gif,jpeg,jpg,png}',
					dest: '<%= yeoman.dist %>/assets/images'
				}]
			}
		},

		//svgmin: {
		//	dist: {
		//		files: [{
		//			expand: true,
		//			cwd: '<%= yeoman.app %>/assets/images',
		//			src: '{,*/}*.svg',
		//			dest: '<%= yeoman.dist %>/assets/images'
		//		}]
		//	}
		//},

		cssmin: {
			// This task is pre-configured if you do not wish to use Usemin
			// blocks for your CSS. By default, the Usemin block from your
			// `index.html` will take care of minification, e.g.
			//
			//     <!-- build:css({.tmp,app}) styles/main.css -->
			//
			dist: {
				files: {
					'<%= yeoman.dist %>/assets/css/debug.css': [
						'.tmp/assets/css/debug.css',
						'<%= yeoman.app %>/assets/css/debug.css'
					],
					'<%= yeoman.dist %>/assets/css/debug.fixed.css': [
						'.tmp/assets/css/debug.fixed.css',
						'<%= yeoman.app %>/assets/css/debug.fixed.css'
					],

					'<%= yeoman.dist %>/assets/css/global.css': [
						'.tmp/assets/css/global.css',
						'<%= yeoman.app %>/assets/css/global.css'
					],
					'<%= yeoman.dist %>/assets/css/global.fixed.css': [
						'.tmp/assets/css/global.fixed.css',
						'<%= yeoman.app %>/assets/css/global.fixed.css'
					]
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					//collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true*/
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: '*.html',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'assets/images/{,*/}*.{webp,gif}',
						'assets/fonts/{,*/}*.*'
					]
				}]
			},
			styles: {
				expand: true,
				dot: true,
				cwd: '<%= yeoman.app %>/assets/css',
				dest: '.tmp/assets/css/',
				src: '{,*/}*.css'
			}
		},
		concurrent: {
			server: [
				'compass',
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'compass',
				'copy:styles',
				'imagemin',
				//'svgmin',
				'htmlmin'
			]
		}
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			//'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		//'autoprefixer',
		'connect:test',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'useminPrepare',
		'concurrent:dist',
		//'autoprefixer',
		'concat',
		'cssmin',
		'uglify',
		'copy:dist',
		//'rev',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};
