/*
 * grunt-font
 * https://github.com/dominikwilkowski/grunt-font
 *
 * Copyright (c) 2015 Dominik Wilkowski
 * Licensed under the MIT license.
 */

'use strict';

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
var chalk = require('chalk');
var changeCase = require('change-case');
var FONTS = require('cfonts');


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Custom functions
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Grunt plugin
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = function(grunt) {

	grunt.registerMultiTask('font', 'Output in a nice font to the console', function() {

		//default options
		var OPTIONS = this.options({
			font: this.options.font || 'block', //define the font face
			colors: this.options.colors || [], //define all colors
			background: this.options.background || 'Black', //define the background color
			letterSpacing: this.options.letterSpacing || 1, //define letter spacing
			space: this.options.space === undefined ? true : this.options.space, //define if the output text should have empty lines on top and on the bottom
			maxLength: this.options.maxLength || 10 //define how many character can be on one line
		});

		var $input = this.data.text;


		var fonts = new FONTS({
			'text': $input,
			'font': OPTIONS.font,
			'colors': OPTIONS.colors,
			'background': OPTIONS.background,
			'letterSpacing': OPTIONS.letterSpacing,
			'space': OPTIONS.space,
			'maxLength': OPTIONS.maxLength
		});
	});

};