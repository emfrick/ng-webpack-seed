/**
 * CSS Imports
 */
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Third-party Module Imports
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

/**
 * Custom Module Imports
 */
import config from './config';
import example from './components/Example';

/**
 * Angular Setup
 */
angular
  .module('app', [uirouter, example])
  .config(config);
