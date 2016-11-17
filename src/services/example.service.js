import angular from 'angular';

class ExampleService {

  constructor($http) {
    this.$http = $http;
  }

  getList() {
    return this.$http.get('https://jsonplaceholder.typicode.com/users')
                     .then((results) => {
                       return results.data;
                     });
  }

}

ExampleService.$inject = ['$http'];

export default angular.module('services.example', [])
  .service('ExampleService', ExampleService)
  .name;
