/***************************************************************************************************************************************************************
 *
 * cfonts
 *
 * Sexy fonts for the console. (CLI output)
 *
 * @license     https://github.com/dominikwilkowski/grunt-font/blob/master/LICENSE  GNU GPLv2
 * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
 * @repository  https://github.com/dominikwilkowski/grunt-font
 *
 **************************************************************************************************************************************************************/

'use strict';

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const CFonts = require('cfonts');


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Grunt plugin
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = function( grunt ) {

	grunt.registerMultiTask('font', 'Output in a nice font to the console', function() {
		let INPUT = this.data.text;

		CFonts.say(INPUT, {
			'font': this.options().font || 'block',
			'align': this.options().align || 'left',
			'colors': this.options().colors || [],
			'background': this.options().background || 'transparent',
			'letterSpacing': this.options().letterSpacing || 1,
			'lineHeight': this.options().lineHeight || 1,
			'space': this.options().space === undefined ? true : this.options().space,
			'maxLength': this.options().maxLength || 0,
		});
	});

};