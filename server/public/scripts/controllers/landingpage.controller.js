myApp.controller('LandingPageController', function(AdminService, $location) {
  console.log('LandingPageController created');
  
  var vm = this;
  vm.AdminService = AdminService;
  
    vm.who= false;
    vm.whoDo= false;





    vm.whoExpand= function(){
      vm.who = true;
    }
    vm.whoExpandShrink= function(){
      vm.who = false;
    }

    vm.whoExpandDo = function () {
      vm.whoDo = true;
    }
    vm.whoExpandShrinkDo = function () {
      vm.whoDo= false;
    }
    
    vm.currentNavItem = 'page1';
      vm.goto = function (page) {
      console.log("Goto " + "'" + page + "'");
      $location.path("'" + page + "'")
    }
  
});