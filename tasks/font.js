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


		var $font = grunt.file.readJSON(__dirname + '/fonts/' + OPTIONS.font + '.json');
		var $input = this.data.text;

		var $output = [];
		for(var i = 0, length = $font.lines; i < length; i++) { //create first lines
			$output[i] = "";
		}

		var $charLength = 0; //use for max character per line
		var $line = 0; //start with line 0
		OPTIONS.background = changeCase.upperCaseFirst(OPTIONS.background);
		var $letterSpacing = "";

		for(var i = 0, length = OPTIONS.letterSpacing; i < length; i++) { //letter spacing
			$letterSpacing += " ";
		}


		for(var i = 0, length = $input.length; i < length; i++) { //iterate through the message

			var $char = $input.charAt(i).toUpperCase(); //only upper case is supported at this time

			if($charLength >= OPTIONS.maxLength || $char === "|") { //jump to next line after OPTIONS.maxLength characters or when line break is found
				$charLength = 0;
				$line += $font.lines;

				for(var l = $line, lll = $line + $font.lines; l < lll; l++) { //create new lines
					$output[l] = "";
				}
			}

			if( $font.chars[ $char ] !== undefined) { //make sure this character exists in the font
				$charLength++; //counting all printed characters

				for(var c = 0, l = $font.lines; c < l; c++) { //iterate over font face lines

					var $character = $font.chars[ $char ][c];

					if($font.colors > 1) {
						for(var o = 0, ll = $font.colors; o < ll; o++) { //convert colors
							var open = new RegExp('<c' + (o + 1) + '>', 'g');
							var close = new RegExp('</c' + (o + 1) + '>', 'g');

							var color = OPTIONS.colors[o] || "white";

							$character = $character.replace(open, chalk.styles[color.toLowerCase()].open);
							$character = $character.replace(close, chalk.styles[color.toLowerCase()].close);
						}
					}

					$output[ ($line + c) ] += $character + $letterSpacing; //save output per character
				}
			}

		}


		var $write = $output.join("\n"); //convert to one line


		if($font.colors > 1) { //add text color if only one
			var color = OPTIONS.colors[o] || "white";

			$write = chalk.styles[color.toLowerCase()].open + $write + chalk.styles[color.toLowerCase()].close;
		}


		if(OPTIONS.space) { //add space
			$write = "\n\n" + $write + "\n\n";
		}


		grunt.log.write( chalk['bg' + OPTIONS.background]( $write ) ); //write out
	});

};