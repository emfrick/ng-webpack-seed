/**
 * Dependencies
 */
routes.$inject = ['$stateProvider'];

/**
 * Module Dependencies
 */
export default function routes($stateProvider) {

  var exampleState = {
    name: 'example',
    url: '/',
    template: require('./example.html'),
    controller: 'ExampleCtrl',
    controllerAs: 'example'
  };

  $stateProvider.state(exampleState);
}
