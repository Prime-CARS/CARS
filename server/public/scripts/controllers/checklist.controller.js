myApp.controller('ChecklistController', function (ChecklistService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.AdminService = AdminService;
  vm.ChecklistService = ChecklistService;

  vm.cars_checklist = {};

  // Call to populate Checklist 
  ChecklistService.getCarChecklist($routeParams.checklist_id);
  vm.carChecklist = ChecklistService.carChecklist;

  vm.oilCheckListVisible = false;

  vm.finishCheckListVisible = false; 

  vm.goto = function (page) {
    console.log("Goto " + "'" + page + "'");
    $location.path("'" + page + "'")
  }

  vm.showOilRequired = function (value) {
    if (vm.oilCheckListVisible = value == 'Y') {
      vm.cars_checklist.oilchange = true;
    } else {
      vm.cars_checklist.oilchange = false;
    }

  };

  vm.showFinishChecklist = function (value) {
    if(vm.finishCheckListVisible = value == 'Y') {
      vm.cars_checklist.finishup_checklist = true;
    } else {
      vm.cars_checklist.finishup_checklist = false;
    }
  };

  vm.submitChecklist = function (checklist) {
    console.log('submit checklist in checklistcontroller', checklist)
  }


});
