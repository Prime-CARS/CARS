myApp.controller('ChecklistController', function(ChecklistService, AdminService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.AdminService = AdminService;
  vm.ChecklistService = ChecklistService;

  vm.cars_checklist = {};

  // Call to populate Checklist 
  ChecklistService.getCarChecklist($routeParams.checklist_id);
  vm.carChecklist = ChecklistService.carChecklist;

  vm.IsVisible = false;

  vm.goto = function (page) {
    console.log("Goto " + "'" + page + "'");
    $location.path("'" + page + "'")
  }

  vm.showOilRequired = function (value) {
    vm.IsVisible = value == 'Y';
  };

});
