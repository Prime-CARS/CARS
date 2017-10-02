myApp.controller('RequestController', function(RequestService) {
  console.log('RequestController created');
  var vm = this;
  vm.RequestService = RequestService;
  /* this is an empty object that will contain the customer's information after the customer has        filled in the Request for Service form on the website's requestService.html page. 
     It will be posted to the the database in the customer_info table. */ 
  vm.customer = {};
  /* this is an empty object that will contain information about the vehicle after the customer has     filled in the  Request for Service form on the website's requestService.html page. */
  vm.vehicle = {};

/* this function is called when the submit form is clicked on the Request for Service form on the       website's requestService.html page. */
  vm.addCustomer = function () {
    console.log("Inside addCustomer function in request.controller.js line 13: ", customer);
    /* this moves the code into the request.service.js file and runs the addCustomer function, which contains the http POST request. */ 
    vm.RequestService.addCustomer(vm.customer);
    vm.addVehicle ();
    }
     
    vm.addVehicle = function() {
      console.log("inside addVehicle function is request.controller.js line 17: ", vehicle);
      /* this moves the code into the request.service.js file and calls the addVehicle function, which contains the http POST request. */
      vm.RequestService.addVehicle(vm.vehicle);
    }
});
//extra comment testing

