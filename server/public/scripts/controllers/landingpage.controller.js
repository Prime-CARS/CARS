myApp.controller('LandingPageController', function(AdminService, $http) {
  console.log('LandingPageController created');
  
  var vm = this;
  vm.AdminService = AdminService;
  vm.userObject = {};

  //login check
  AdminService.getuser();

});