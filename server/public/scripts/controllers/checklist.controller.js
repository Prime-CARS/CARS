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


  vm.saveChecklistItem = function (checklistItem) {
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
    //will handle all the if statements for checking if checklist is completed and will also change status to serviced if checklist is done 

    // --If Function to check checklist

    if (checklist.headlights_high === 'NULL') {
      alert('must fill in headlights high');
    }
    if (checklist.headlights_low) {

    }
    if (checklist.parkinglights_front) {

    }
    if (checklist.turnsignals_front) {

    }
    if (checklist.taillights) {

    }
    if (checklist.turnsignals_rear) {

    }
    if (checklist.brakelights) {

    }
    if (checklist.backup_lights) {

    }
    if (checklist.licensetabs_expiration) {

    }
    if (checklist.sparetirepressure) {

    }
    if (checklist.currenttirepressure_lf) {

    }
    if (checklist.currenttirepressure_rf) {

    }
    if (checklist.currenttirepressure_lr) {

    }
    if (checklist.currenttirepressure_rr) {

    }
    if (checklist.finaltirepressure_lf) {

    }
    if (checklist.finaltirepressure_rf) {

    }
    if (checklist.finaltirepressure_lr) {

    }
    if (checklist.finaltirepressure_rr) {

    }
    if (checklist.tirecondition_lf) {

    }
    if (checklist.tirecondition_rf) {

    }
    if (checklist.tirecondition_lr) {

    }
    if (checklist.tirecondition_rr) {

    }
    if (checklist.wipercondition) {

    }
    if (checklist.airfiltercondition) {

    }
    if (checklist.brakefluid) {

    }
    if (checklist.powersteeringfluid) {

    }
    if (checklist.transmissionfluid) {

    }
    if (checklist.oillevel) {

    }
    if (checklist.washerfluid) {

    }
    if (checklist.coolantlevel) {

    }
    if (checklist.coolantlevel_strength) {

    }
    if (checklist.radiatorhosecondition) {

    }
    if (checklist.batterycondition) {

    }
    if (checklist.serpentinebeltcondition) {

    }
    if (checklist.otherbeltscondition) {

    }
    if (checklist.lubehoodlatch) {

    }
    if (checklist.shockstruttest) {

    }
    if (checklist.frontwheelbearingtest) {

    }
    if (checklist.tierodtest) {

    }
    if (checklist.balljointtest) {

    }
    if (checklist.controlarmcondition) {

    }
    if (checklist.stabilizerbarlinkcondition) {

    }
    if (checklist.cvbootcondition) {

    }
    if (checklist.frontbrakecondition) {

    }
    if (checklist.frontbrakecalipers) {

    }
    if (checklist.reardiscbrakecondition) {

    }
    if (checklist.rearbrakecalipers) {

    }
    if (checklist.rearstabilizerbarlinkcondition) {

    }
    if (checklist.torqueallwheelsremoved) {

    }
    if (checklist.exhaustsystem) {

    }
    if (checklist.enginescancodes) {

    }
    if (checklist.oilchange) {

    }
    if (checklist.finishup_checklist) {

    }
    if (checklist.vehicle_observations) {

    }
    if (checklist.recommended_repairs) {

    }
    if (checklist.repairs_declined) {

    }
    if (checklist.parts_installed) {

    }
    if (checklist.cost) {

    }
    if (checklist.mechanics) {

    }
    if (checklist.current_mileage) {

    } else {
      checklist.checklist_status = 'serviced';
      checklist.checklist_id = $routeParams.checklist_id;
      ChecklistService.submitChecklist(vm.cars_checklist)
    }


  } // end of submit function 

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
