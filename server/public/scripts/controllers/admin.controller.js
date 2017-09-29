myApp.controller('AdminController', function(AdminService) {
  console.log('AdminController created');
  var vm = this;
  vm.AdminService = AdminService;
  vm.userObject = AdminService.userObject;

  vm.showRequests = true;
  vm.InfoExpanded = false;
  vm.nrqstneeded = false;
  vm.Requests = {};

  vm.makeRequestsVisible = function(){
    vm.showRequests = true;
    console.log(vm.showRequests);
    }

  vm.showSearch = function(){
    vm.showRequests = false;
    vm.nrqstneeded = false;
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
    vm.Requests = AdminService.Requests;
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

  vm.getRequests()
});
