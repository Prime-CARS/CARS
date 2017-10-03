myApp.controller('AdminController', function(AdminService, $location, $http) {
  console.log('AdminController created');
  var vm = this;
  vm.AdminService = AdminService;

  //doing userobject check in another function
  vm.userObject = AdminService.userObject;

  vm.showRequests = true;
  vm.InfoExpanded = false;
  vm.nrqstneeded = false;
  vm.showAuths = false;
  vm.showSearchs = false;

  vm.RetrievedRequests = AdminService.Requests;


  vm.makeRequestsVisible = function(){
    vm.showRequests = true;
    vm.showAuths = false;
    vm.showSearchs = false;
    console.log(vm.showRequests);
    }

  vm.showSearch = function(){
    vm.showRequests = false;
    vm.showSearchs = true;
    vm.nrqstneeded = false;
    vm.showAuths = false;

    console.log(vm.showRequests);
    }

  vm.expandInfo= function(){
    vm.InfoExpanded = true;  
    }

  vm.shrinkInfo=function(){
    vm.InfoExpanded=false;
    console.log('shrink button clicked'); 
    }

  vm.getRequests= function(){
    vm.Requests = AdminService.getRequests();

    }

  vm.AddRequest= function(){
    vm.nrqstneeded = true;
    }
  
  vm.ReduceRequest = function(){
    vm.nrqstneeded = false;
    vm.getRequests();
  }

  vm.search_history = function(z){
    console.log('search button hit, passed', z, 'as search stuff')
  }

  vm.showAuth = function(){
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
  vm.getRequests();
  console.log(vm.RetrievedRequests);

});
