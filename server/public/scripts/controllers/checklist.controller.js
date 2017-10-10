myApp.controller('ChecklistController', function (ChecklistService, AdminService, $routeParams, $mdDialog) {
  // console.log('ChecklistController created');
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



  vm.showFinishChecklist = function (show) {
    if (show == 'Y') {
      vm.cars_checklist.finishup_checklist = true;
      vm.finishCheckListVisible = true;
    } else {
      vm.cars_checklist.finishup_checklist = false;
      vm.finishCheckListVisible = false;
    }
  };

  vm.submitChecklist = function (checklistItem) {
    // console.log('Checklist Save', checklistItem);
    // console.log('Overall Checklist ', vm.cars_checklist.info);

    //If statement throws up red-flag input box if item fails inspection
    if (checklistItem == 'fail') {
      vm.redFlag(checklistItem);
      vm.cars_checklist.info.checklist_id = $routeParams.checklist_id;
      vm.cars_checklist.info.checklist_status = 'in_progress';
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    } else {
      vm.cars_checklist.info.checklist_id = $routeParams.checklist_id;
      vm.cars_checklist.info.checklist_status = 'in_progress';
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    }
  }

  vm.submitChecklistForService = function (checklist) {
    checklist.checklist_id = $routeParams.checklist_id;
    checklist.checklist_status = 'in_progress';
    console.log('Checklist to save: ', checklist);
  }

  vm.redFlag = function (failedItem) {
    // console.log('Item Failed');
    $mdDialog.show({
      controller: 'ChecklistController as cc',
      templateUrl: '/views/partials/vehicleobservations.html',
      parent: angular.element(document.body),
      targetEvent: failedItem,
      clickOutsideToClose: true
    })
  }

  vm.vehicleObservationPopUp = function () {
    $mdDialog.hide();
  }
});
