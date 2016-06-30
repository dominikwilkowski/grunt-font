/*
 * grunt-font
 * https://github.com/dominikwilkowski/grunt-font
 *
 * Copyright (c) 2015 Dominik Wilkowski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	//Dependencies
	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.initConfig({

		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// JSHINT
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		jshint: {
			options: {
				jshintrc: '.jshintrc',
			},

			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// FONT
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		font: {
			default: {
				text: 'a b c defghijklmnopqrstuvwxyz|0123456789|!?.+-_=@#$%&()/:;ü',
			},

			//deviate from defaults
			custom: {
				options: {
					font: 'simple',
					colors: ['black', 'blue'],
					background: 'cyan',
					maxLength: 15,
					space: false,
				},
				text: 'a b c defghijklmnopqrstuvwxyz|0123456789|!?.+-_=@#$%&()/:;ü',
			},

			custom2: {
				options: {
					font: 'console',
					colors: ['blue'],
					background: 'white',
				},
				text: 'a b c defghijklmnopqrstuvwxyz|0123456789|!?.+-_=@#$%&()/:;ü',
			},

			custom3: {
				options: {
					font: 'simple3d',
					colors: ['yellow'],
				},
				text: 'a b c defghijklmnopqrstuvwxyz|0123456789|!?.+-_=@#$%&()/:;ü',
			},

			custom4: {
				options: {
					font: 'simpleBlock',
					colors: ['magenta'],
					align: 'center',
				},
				text: 'a b c defghijklmnopqrstuvwxyz|0123456789|!?.+-_=@#$%&()/:;ü',
			},
		},


		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		// UNIT TESTS
		//----------------------------------------------------------------------------------------------------------------------------------------------------------
		nodeunit: {
			tests: ['test/*_test.js'], //not build in yet
		},

	});


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// TASKS
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	grunt.registerTask('test', ['font'/*, 'nodeunit'*/]);

	grunt.registerTask('default', ['jshint', 'test']);

};