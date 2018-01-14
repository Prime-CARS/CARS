myApp.controller('AdminController', function (AdminService, RequestService, AuthService, SummaryService, $location) {

  $('.maskPhone').mask('(000) 000-0000')

  //console.log('AdminController created');
  var vm = this;
  vm.AdminService = AdminService;

  // handles current user role in case of log in/log out
  // sends users who aren't admins to the mechanic's page if they're logged in and attempting to hit the admin's page

  //highlights 'Admin' when on the nav bar when on that page
  vm.currentNavItem = "adminTab"; 

  // moved to service for resolve control
  AdminService.getuser();

  //highlights "Admin" when user is on the page
  vm.currentNavItem = "adminTab";


  vm.Prints = AdminService.Prints;
  vm.customer = {};
  vm.textboxShowing = false;
  vm.RetrievedRequests = AdminService.Requests;
  vm.searchResults = AdminService.searchResults.list;

  vm.makeRequestsVisible = function () {
    vm.showRequests = true;
    vm.showAuths = false;
    vm.showSearchs = false;
    vm.getRequests();
  }

  // vm.showSearch = function () {
  //   vm.showRequests = false;
  //   vm.showSearchs = true;
  //   vm.nrqstneeded = false;
  //   vm.showAuths = false;
  //   // vm.getRequests();
  //   console.log(vm.showRequests);
  // }

  // vm.expandInfo = function () {
  //   vm.InfoExpanded = true;
  // }

  vm.shrinkInfo = function () {
    vm.InfoExpanded = false;
// console.log('shrink button clicked');
  }

  vm.getRequests = function () {
    AdminService.getRequests();
    AdminService.getPrints();
  }

  vm.AddRequest = function () {
    vm.nrqstneeded = true;
    vm.getRequests();
  }

  vm.ReduceRequest = function () {
    vm.nrqstneeded = false;
  }

  vm.search_history = function (z) {
    AdminService.searchHistory(z);
  }



  // vm.showAuth = function () {
  //   vm.showAuths = true;
  //   vm.showRequests = false;
  //   vm.nrqstneeded = false;
  //   vm.showSearchs = false;

  //   console.log('meow');
  // }

  vm.hideAuth = function () {
    vm.showAuths = false;
// console.log('woof')
  }

  vm.history_view = function (c) {
// console.log(c);
    AuthService.getAuth(c)
  }

  // this function is called when the submit form is clicked on the Request for Service form
  vm.addCustomer = function () {
    vm.customer.service_status = "scheduled";
    RequestService.addCustomerNoEmail(vm.customer);
    vm.ReduceRequest();
    vm.getRequests();
  }
  // clled when a customers request is scheduled or denied
  vm.updateCustomer = function (z, x) {
// console.log('Update Customer button hit on controller');
    RequestService.updateCustomer(z, x);
    vm.getRequests();
  }

  vm.openTextbox = function () {
    vm.textboxShowing = true;
  };

  vm.getChecklist = function (c) {
    SummaryService.getSummary(c);
  };
  /*putting in tabs*/

  vm.tabs = function () {
    vm.data = {
      selectedIndex: 0,
      secondLocked: true,
      secondLabel: "Item Two",
      bottom: false
    };
    vm.next = function () {
      vm.data.selectedIndex = Math.min(vm.data.selectedIndex + 1, 2);
    };
    vm.previous = function () {
      vm.data.selectedIndex = Math.max(vm.data.selectedIndex - 1, 0);
    };
  }
// putting in tabs
  vm.getRequests();
});
