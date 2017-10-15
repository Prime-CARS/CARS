myApp.controller('LandingPageController', function(AdminService, $location) {
//console.log('LandingPageController created');
  
  var vm = this;
  vm.AdminService = AdminService;
  
    vm.who= false;
    vm.whoDo= false;
    vm.how = false;
    vm.when = false;
    vm.what = false;
    vm.money = false;


    
    vm.moneyExpand = function () {
      vm.money = true;
    }
    vm.moneyExpandShrink = function () {
      vm.money = false;
    }

    vm.whoExpand= function(){
      vm.who = true;
    }
    vm.whoExpandShrink= function(){
      vm.who = false;
    }

    vm.whoExpandDo = function () {
      vm.whoDo = true;
    }
    vm.whoExpandDoShrink = function () {
      vm.whoDo= false;
    }
    vm.howExpand = function () {
      vm.how = true;
    }
    vm.howExpandShrink = function () {
      vm.how = false;
    }
    vm.whenExpand = function () {
      vm.when = true;
    }
    vm.whenExpandShrink = function () {
      vm.when = false;
    }
    vm.whatExpand = function () {
      vm.what = true;
    }
    vm.whatExpandShrink = function () {
      vm.what = false;
    }


    vm.currentNavItem = 'page1';
      vm.goto = function (page) {
    //console.log("Goto " + "'" + page + "'");
      $location.path("'" + page + "'")
    }
  
});