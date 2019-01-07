```shell
     ██████╗  ██████╗  ██╗   ██╗ ███╗   ██╗ ████████╗
    ██╔════╝  ██╔══██╗ ██║   ██║ ████╗  ██║ ╚══██╔══╝
    ██║  ███╗ ██████╔╝ ██║   ██║ ██╔██╗ ██║    ██║
    ██║   ██║ ██╔══██╗ ██║   ██║ ██║╚██╗██║    ██║
    ╚██████╔╝ ██║  ██║ ╚██████╔╝ ██║ ╚████║    ██║
     ╚═════╝  ╚═╝  ╚═╝  ╚═════╝  ╚═╝  ╚═══╝    ╚═╝
        ███████╗  ██████╗  ███╗   ██╗ ████████╗
        ██╔════╝ ██╔═══██╗ ████╗  ██║ ╚══██╔══╝
        █████╗   ██║   ██║ ██╔██╗ ██║    ██║
        ██╔══╝   ██║   ██║ ██║╚██╗██║    ██║
        ██║      ╚██████╔╝ ██║ ╚████║    ██║
        ╚═╝       ╚═════╝  ╚═╝  ╚═══╝    ╚═╝
```

> Output in a nice font to the console for banners or logos using [cfonts](https://nodei.co/npm/cfonts/)

[![NPM](https://nodei.co/npm/grunt-font.png?downloads=true)](https://nodei.co/npm/grunt-font/)

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide,
as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you’re familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-font --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-font');
```

## The `font` task

### Overview
In your project’s Gruntfile, add a section named `font` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	font: {
		start: {
			text: 'Welcome',
		},
	},
});
```


### Options
Please check [cfonts documentation](https://github.com/dominikwilkowski/cfonts/) for all options.


### Usage Examples

#### Default Options
In this example, the default options are used which will print your text in block and white.

```js
font: {
	start: {
		text: 'Welcome',
		options: {
			font: 'block',       // define the font face
			align: 'left',       // define text alignment
			colors: ['white'],   // define all colors
			background: 'Black', // define the background color
			letterSpacing: 1,    // define letter spacing
			lineHeight: 1,       // define the line height
			space: true,         // define if the output text should have empty lines on top and on the bottom
			maxLength: 0         // define how many character can be on one line
		},
	},
},
```

#### Custom Options
Choose different colors:

```js
font: {
	start: {
		text: 'Welcome',
		option: {
			colors: ['black', 'blue'],
			background: 'cyan',
		},
	},
},
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 1.0.1  - updated to cfonts ^2.3.0 and removed lock file
* 1.0.0  - updated to cfonts ^2.1.0
* 0.0.14 - updated to cfonts 1.2.0
* 0.0.13 - updated to cfonts 1.0.1
* 0.0.12 - updated to cfonts 1.0.0
* 0.0.11 - Updated peerDependencies for grunt 1.0
* 0.0.10 - Updated devDependencies for grunt 1.0
* 0.0.9  - updated to cfonts 0.0.13
* 0.0.8  - updated to cfonts 0.0.10
* 0.0.7  - fixed settings object
* 0.0.6  - updated docs
* 0.0.5  - separated into two node modules
* 0.0.4  - fixed block font parameters
* 0.0.3  - added letter spacing option
* 0.0.2  - path fixes
* 0.0.1  - alpha test

## License
Copyright (c) Dominik Wilkowski. Licensed under the [GNU GPLv2](https://github.com/dominikwilkowski/grunt-font/blob/master/LICENSE).
