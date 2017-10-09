myApp.controller('ChecklistController', function (ChecklistService, AdminService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.AdminService = AdminService;
  vm.ChecklistService = ChecklistService;

  // Call to populate Checklist 
  ChecklistService.getVehicleInfo($routeParams.checklist_id);
  vm.cars_checklist = ChecklistService.vehicleInfo;

  vm.oilCheckListVisible = false;

  vm.finishCheckListVisible = false; 

  vm.goto = function (page) {
    console.log("Goto " + "'" + page + "'");
    $location.path("'" + page + "'")
  }

  vm.showOilRequired = function (show) {
    if ( show == 'Y') {
      vm.cars_checklist.oilchange = true;
    } else {
      vm.cars_checklist.oilchange = false;
    }

  };

  vm.showFinishChecklist = function (show) {
    if( show == 'Y') {
      vm.cars_checklist.finishup_checklist = true;
    } else {
      vm.cars_checklist.finishup_checklist = false;
    }
  };

  vm.submitChecklist = function (checklist) {
    console.log('submit checklist in checklistcontroller', checklist.info);
    checklist.info.checklist_id = $routeParams.checklist_id;
    checklist.info.checklist_status = 'in_progress';
    ChecklistService.submitChecklist(checklist.info);
  }


});
