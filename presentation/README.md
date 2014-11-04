# Our ws3c project presentation
> A [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) presentation, built with [generator-bespoke](https://github.com/markdalgleish/generator-bespoke)

## View slides locally

First, ensure you have the following installed:

1. [Node.js](http://nodejs.org)
2. [Bower](http://bower.io): `$ npm install -g bower`
3. [Gulp](http://gulpjs.com): `$ npm install -g gulp`

Then, install dependencies and run the preview server:

```bash
$ npm install && bower install
$ gulp serve
```

## Publish slides on github pages

Simply do:

```bash
$ gulp deploy
```

Then, after a short while the slides should be available [here](https://livioso.github.io/ws3c/).

> If you have [two-factor authentication](https://help.github.com/articles/about-two-factor-authentication/) enabled, you must create a [personal access](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) token to use instead of your GitHub password.
