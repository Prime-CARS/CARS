myApp.controller('LandingPageController', function(AdminService) {
  console.log('LandingPageController created');
  
  var vm = this;
  vm.AdminService = AdminService;
  vm.userObject = {};

});