import './example.sass';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './example.routes';
import ExampleController from './example.controller';

export default angular.module('app.example', [uirouter])
  .config(routing)
  .controller('ExampleCtrl', ExampleController)
  .name;
