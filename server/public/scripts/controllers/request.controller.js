myApp.controller('RequestController', function (AdminService, RequestService, $http, $location) {
  console.log('RequestController created');
  
  //jquery mask pulg in for phone number validation
  $('.maskPhone').mask('(000) 000-0000');

  var vm = this;
  vm.RequestService = RequestService;
  vm.AdminService = AdminService;
  vm.customer = RequestService.customer;
  vm.textboxShowing = false;
  //will always set "service status" to requested when form is submitted by customer 
  vm.customer = { service_status: 'requested' };

  // handles current user role in case of log in/log out
  // checking if current user is a mechanic or admin
  AdminService.getuser();
  // vm.userObject = {};
  // $http.get('/user').then(function (response) {
  //   console.log('Checking current user: ', response.data);
  //   vm.userObject = response.data;
  // });

  /* this function is called when "submit" is clicked on the Request for Service form */
  vm.addCustomer = function () {
    console.log("Inside addCustomer function in request.controller.js line 25: ", vm.customer);
    vm.RequestService.addCustomer(vm.customer);
  }
  vm.openTextbox = function () {
    vm.textboxShowing = true;
  };

  vm.closeTextbox = function() {
    vm.textboxShowing = false;
  };
});


