myApp.controller('RequestController', function (AdminService, RequestService, $http, $location) {
  console.log('RequestController created');
  var vm = this;
  vm.RequestService = RequestService;
  vm.AdminService = AdminService;
  vm.customer = RequestService.customer;
  vm.textboxShowing = false;

  // handles current user role in case of log in/log out
  // checking if current user is a mechanic or admin
  vm.userObject = {};
  $http.get('/user').then(function (response) {
    console.log('Checking current user: ', response.data);
    vm.userObject = response.data;
  });

  /* this function is called when the submit form is clicked on the Request for Service form on the       website's requestService.html page. */
  vm.addCustomer = function () {
    console.log("Inside addCustomer function in request.controller.js line 13: ", vm.customer);
    vm.RequestService.addCustomer(vm.customer);
  }
  vm.openTextbox = function () {
    vm.textboxShowing = true;
  };

  // Contact and activate nodemailer
  vm.sendMail = function () { //this function communicates with the server via $http.post request
    console.log("sendMail function has been clicked in request.controller line 19");
    $http.post('/mail').then(function (response) {
      console.log("This is the respose: ", response);
    })
  };
});


