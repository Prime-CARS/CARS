myApp.controller('LandingPageController', function(AdminService, $location) {
  console.log('LandingPageController created');
  
  var vm = this;
  vm.AdminService = AdminService;
  
    vm.currentNavItem = 'page1';

    vm.goto = function (page) {
      console.log("Goto " + "'" + page + "'");
      $location.path("'" + page + "'")
    }
  
});