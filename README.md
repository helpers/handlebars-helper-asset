# {{asset}} [![NPM version](https://badge.fury.io/js/handlebars-helper-asset.png)](http://badge.fury.io/js/handlebars-helper-asset)

> Handlebars helper for generating a assetative link from the current page to the specified page.

## Example

```html
<link rel="stylesheet" href="{{asset 'css/styles.css'}}">
```
Results in something like:

```html
<link href="../../assets/css/styles.css" rel="stylesheet">
```

## Installation

Install with [npm](npmjs.org)

```bash
npm i handlebars-helper-asset --save-dev
```

Install with [bower](https://github.com/bower/bower)

```bash
bower install handlebars-helper-asset --save-dev
```

## Register the helper

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "handlebars-helper-asset": "*"
  },
  "keywords": [
    "handlebars-helper-asset"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-asset' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-asset', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](http://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License and Copyright

Copyright (c) 2014 [Jon Schlinkert](http://github.com/jonschlinkert), contributors.
Licensed under the [MIT License](./LICENSE-MIT)