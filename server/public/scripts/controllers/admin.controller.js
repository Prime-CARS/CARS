myApp.controller('AdminController', function (AdminService, AuthService, $location, $http) {
  console.log('AdminController created');
  var vm = this;
  vm.AdminService = AdminService;

  // handles current user role in case of log in/log out
  // sends users who aren't admins to the mechanic's page if they're logged in and attempting to hit the admin's page
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
  vm.RetrievedRequests = AdminService.Requests;


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


  vm.search_history = function (z) {
    console.log('search button hit, passed', z, 'as search stuff')
<<<<<<< HEAD

=======
  
>>>>>>> master
  }

  vm.showAuth = function () {
    vm.showAuths = true;
    vm.showRequests = false;
    vm.nrqstneeded = false;
    vm.showSearchs = false;
  }

  vm.hideAuth = function () {
    vm.showAuths = false;
  }


  // Checks if current user is an admin, will kick to home page if not
  // vm.userObject = {};
  // vm.checkUser = function () {
  //   $http.get('/user').then(function (response) {
  //     if (response.data.role != 'admin') {
  //       console.log('Current user is not an admin');
  //       $location.path('/cars');
  //     }
  //   })
  // }
  //vm.checkUser();

  vm.getPrint = function () {
    AdminService.getPrints()
  }

<<<<<<< HEAD
  vm.history_view = function (c) {
    AuthService.PrintPage = c;
    console.log(c);
  }
=======
  vm.history_view= function(c){
      console.log(c);
      AuthService.getAuth(c)
      
    }
>>>>>>> master


  vm.getPrint();
  vm.getRequests();
  console.log(vm.RetrievedRequests)


});
