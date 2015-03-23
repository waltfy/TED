/**
 * This module returns returns the correct object based on the current environment
 *
 * You can override (or add) any attribute by simply adding a file named `overrides.json`
 * to this folder, there you can simply add attributes which will then be overriden
 * to the resulting object. e.g overrides.json:
 *
 * { "api_url": "https://api.bloomstaging.tk" }
 *
 * process.env.NODE_ENV - String representing the current environment, defaults to development.
 * @returns the matching object from config.json
 */
var _ = require('lodash');
var OVERRIDES;

var PROJECT_DIR = __dirname;
console.log("PROJECT_DIR:", PROJECT_DIR);

try {
  OVERRIDES = require('./overrides.json'); // attempts to load overrides.json which is ignored by git
} catch (err) {
  OVERRIDES = {};
} finally {
  module.exports = _.assign(require('./config.json')[process.env.NODE_ENV || 'development'], OVERRIDES);
}
