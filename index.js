/**
 * Handlebars Helper: {{asset}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

// Node.js
var path = require('path');

// Export helpers
module.exports.register = function (Handlebars, options, params) {

  /**
   * Generates a relative path from the
   * destination HTML file to the file
   * specified in the helper.
   *
   * This helper relies on the `assets`
   * option being defined in the Assemble
   * options.
   *
   * Example:
   *
   * ```js
   * assemble: {
   *   options: {
   *     assets: 'dist/assets'
   *   },
   *   files: {
   *     'dist/foo/bar/': ['pages/index.hbs']
   *   }
   * }
   * ```
   * In our HTML:
   *
   * ```html
   * <link href="{{asset 'css/styles.css'}}" rel="stylesheet">
   * ```
   *
   * Results in:
   *
   * ```html
   * <link href="../../assets/css/styles.css" rel="stylesheet">
   * ```
   */
  Handlebars.registerHelper('asset', function (filepath) {
    return path.join(options.assets, filepath).replace(/\\/g, '/');
  });

};