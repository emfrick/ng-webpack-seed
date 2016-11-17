/**
 * Controller Definition
 */
export default class ExampleController {

  constructor(ExampleService) {
    console.log("ExampleController Instantiated");

    this.message = "Example Message bound to controller";

    ExampleService.getList()
                  .then((list) => {
                    this.list = list;
                  })
                  .catch((err) => {
                    this.list = [];
                    this.error = "Error retrieving list";
                  });
  }

};

ExampleController.$inject = ['ExampleService'];
