myApp.controller('AdminController', function (AdminService, RequestService, AuthService, $location, $http) {

  console.log('AdminController created');
  var vm = this;
  vm.AdminService = AdminService;

  // handles current user role in case of log in/log out
  // sends users who aren't admins to the mechanic's page if they're logged in and attempting to hit the admin's page

  // moved to service for resolve control
  vm.userObject = {};
  $http.get('/user').then(function (response) {
    console.log('Checking current user: ', response.data);
    vm.userObject = response.data;
    if (vm.userObject.role != 'admin') {
      // checks if user is logged in
      console.log('Current role not allowed');
      $location.path('/mechanic');
    }
  });

  vm.showRequests = true;
  vm.InfoExpanded = false;
  vm.nrqstneeded = false;
  vm.showAuths = false;
  vm.showSearchs = false;
  vm.Prints = AdminService.Prints;
  vm.customer = {};
  vm.textboxShowing = false;
  vm.RetrievedRequests = AdminService.Requests;
  vm.searchResults = AdminService.searchResults.list;

  vm.makeRequestsVisible = function () {
    vm.showRequests = true;
    vm.showAuths = false;
    vm.showSearchs = false;
    console.log(vm.showRequests);
  }

  vm.showSearch = function () {
    vm.showRequests = false;
    vm.showSearchs = true;
    vm.nrqstneeded = false;
    vm.showAuths = false;

    console.log(vm.showRequests);
  }

  vm.expandInfo = function () {
    vm.InfoExpanded = true;
  }

  vm.shrinkInfo = function () {
    vm.InfoExpanded = false;
    console.log('shrink button clicked');
  }

  vm.getRequests = function () {
    vm.Requests = AdminService.getRequests();

  }

  vm.AddRequest = function () {
    vm.nrqstneeded = true;
  }

  vm.ReduceRequest = function () {
    vm.nrqstneeded = false;
    vm.getRequests();
  }

//******************************************************
  vm.search_history = function (z) {

    console.log('search button hit, passed', z, 'as search stuff')
    AdminService.searchHistory(z);
  }

  

  vm.showAuth = function () {
    vm.showAuths = true;
    vm.showRequests = false;
    vm.nrqstneeded = false;
    vm.showSearchs = false;
    console.log('meow');
    
  }

  vm.hideAuth = function () {
    vm.showAuths = false;
    console.log('woof')
  }

  vm.getPrint = function () {
    AdminService.getPrints()
  }

  vm.history_view = function (c) {
    console.log(c);
    AuthService.getAuth(c)

  }

  /* this function is called when the submit form is clicked on the Request for Service form on the       website's requestService.html page. */
  vm.addCustomer = function () {
    vm.customer.service_status = "scheduled"; 
    RequestService.addCustomerNoEmail(vm.customer);
  }
// clled when a customers request is scheduled or denied
  vm.updateCustomer = function (z,x){
    console.log('Update Customer button hit on controller');
    RequestService.updateCustomer(z,x);
    vm.getRequests();
  }
  
  vm.openTextbox = function () {
    vm.textboxShowing = true;
  };

  vm.getChecklist = function (){
    swal({
      title:"you hit the history button",
      text: "now just to link it",
      type: "success"
    })
  };

  vm.getPrint();
  vm.getRequests();
  console.log(vm.RetrievedRequests)

});
