/**
 * Dependencies
 */
config.$inject = ['$urlRouterProvider'];

/**
 * Module Dependencies
 */
export default function config($urlRouterProvider) {
  console.log("Config Block");

  $urlRouterProvider.otherwise('/');
}
