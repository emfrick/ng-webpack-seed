import './example.sass';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './example.routes';
import ExampleController from './example.controller';
import ExampleService from '../../services/example.service';

export default angular.module('app.example', [uirouter, ExampleService])
  .config(routing)
  .controller('ExampleCtrl', ExampleController)
  .name;
