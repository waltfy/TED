/**
 * This module returns returns the correct object based on the current environment
 *
 * You can override (or add) any attribute by simply adding a file named `overrides.json`
 * to this folder, there you can simply add attributes which will then be overriden
 * to the resulting object. e.g overrides.json:
 *
 * process.env.NODE_ENV - String representing the current environment, defaults to development.
 * @returns the matching object from config.json
 */
var assign = require('lodash.assign');
var path = require('path');

var DEFAULT_PATH = '../../config';
var OVERRIDES;
var CONFIG;
var ENV = process.env.NODE_ENV || 'development';

var log = console.log.bind(console, '[TED]:');

try {
  OVERRIDES = require(path.join(DEFAULT_PATH, 'overrides.json')); // attempts to load overrides.json which is ignored by git
} catch (err) {
  OVERRIDES = {};
  log('You did not provide any overrides.');
}

try {
  CONFIG = assign(require(path.join(DEFAULT_PATH, 'config.json'))[ENV], OVERRIDES);
} catch (err) {
  CONFIG = {};
  log('Could not read ./config/config.json! Have you created the config folder at the root of your project? Try again.');
} finally {
  module.exports = CONFIG; 
}
