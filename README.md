## Overview

Fast time accounting webapp. (OTAK - Open Time Accounting Kit)
(State: In development - Not released yet)

## Quickstart

Clone this repository and build on what is included in the `app` directory.

# Install

**tl;dr**: [Download OTAK](https://github.com/patrickjaja/OTAK/releases) - or clone repo! and run `$ npm install --global gulp && npm install` in that directory to get started.

-

To take advantage of Open Time Accounting Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

## Getting the code

[Download](https://github.com/patrickjaja/OTAK/releases) and extract OTAK to where you want to work.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.8.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

*This will install Gulp globally. Depending on your user account, you may need to gain elevated permissions using `sudo` (i.e `sudo npm install --global gulp`).*


### Local dependencies

Next, install the local dependencies Open Time Accounting Kit requires:

```sh
$ npm install
```

That's it! You should now have everything needed to use the Open Time Accounting Kit.

-

You may also want to get used to some of the [commands](commands.md) available.


## Web Performance

This gives you a high performance starting point out of the box and we actively work on delivering the best [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score and frame-rate possible.

In terms of CSS, opting to just use the minimal layout (main.css, h5bp.css) weighs in at ~7KB before modifications are made. Opting to use the Style Guide styles (the default) will take this up to ~39KB. It is your choice which path makes the most sense for your project, however notes on excluding Style Guide styles are in our gulpfile.

## Browser Support

At present, we officially aim to support the following browsers:

* IE9, IE10, IE11, IE Mobile 10
* FF 30, 31
* Chrome 34, 35
* Safari 7, 8
* Opera 23, 24
* iOS Safari 7, 8
* Opera Coast
* Android / Chrome 4.4, 4.4.3
* BlackBerry 10

This is not to say that [OTAK] cannot be used in browsers older than those reflected, but merely that our focus will be on ensuring our layouts work great in the above.

## Troubleshooting

We would be happy to discuss how they can be solved.

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.js`, `.jshintrc` and `.travis.yml`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Extras

-

## Inspiration

TAK is inspired by [Mobile HTML5 Boilerplate](http://html5boilerplate.com/mobile/) and Yeoman's [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp), having taken input from contributors to both projects during development.

## Contributing

Contributions, questions and comments are all welcome and encouraged.

## License

Apache 2.0  
Copyright 2014 PSO Inc
