myApp.controller('ChecklistController', function (ChecklistService, AdminService, $routeParams, $mdDialog, $location) {
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
    // console.log('Value to pass: ', checklistItem);
    if (vm.cars_checklist.info.checklist_status === 'ready') {
      vm.cars_checklist.info.checklist_id = $routeParams.checklist_id;
      vm.cars_checklist.info.checklist_status = 'in_progress';
    }
    if (vm.cars_checklist.info.checklist_status != 'ready') {
      vm.cars_checklist.info.checklist_id = $routeParams.checklist_id;
    } 
    //If statement throws up red-flag input box if item fails inspection
    if (checklistItem == 'fail') {
      vm.redFlag(checklistItem);
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    }
    if (checklistItem == 'poor') {
      vm.redFlag(checklistItem);
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    }
    if (vm.cars_checklist.info.oilchange === false) {
      vm.cars_checklist.info.drain_oil = false;
      vm.cars_checklist.info.remove_filter_gasket = false;
      vm.cars_checklist.info.install_drain_plug = false;
      vm.cars_checklist.info.install_tighten_filter = false;
      vm.cars_checklist.info.addoil_amount = undefined;
      vm.cars_checklist.info.addoil_weight = undefined;
      vm.cars_checklist.info.checkoil_plug = false;
      vm.cars_checklist.info.check_filter = false;
      vm.cars_checklist.info.oilchange_sticker = false;
      vm.cars_checklist.info.oilfilter_brand = undefined;
      vm.cars_checklist.info.oilfilter_number = undefined;
      vm.cars_checklist.info.oiltype = undefined;
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    }
    else {
      ChecklistService.submitChecklist(vm.cars_checklist.info);
    }
  };


  vm.submitChecklistForService = function (checklist) {

       if (checklist.mechanics === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please fill in your name in the mechanic field')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }

    if (checklist.headlights_high === null) {
       $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select in either a pass or fail for headlights - high')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.headlights_low === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select in either a pass or fail for headlights - low')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.parkinglights_front === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select in either a pass or fail for parking lights - front ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.turnsignals_front === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select in either a pass or fail for turn signals - front ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.taillights === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select either a pass or fail for tail lights ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.turnsignals_rear === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select either a pass or fail for turn signals rear')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.brakelights === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please fselect either a pass or fail for brake lights')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.backup_lights === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select either a pass or fail for back up lights backup lights  ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.licensetabs_expiration === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please make sure license tabs has a date ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.sparetirepressure === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for spare tire ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.currenttirepressure_lf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for current tire - lf')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.currenttirepressure_rf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for current tire -rf')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.currenttirepressure_lr === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for current tire - lr')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.currenttirepressure_rr === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for current tire - rr')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.finaltirepressure_lf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for final tire - lf')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.finaltirepressure_rf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for final tire - rf')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.finaltirepressure_lr === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for final tire - lr')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.finaltirepressure_rr === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input a pressure for final tire - rr')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.tirecondition_lf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for left front tire condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.tirecondition_rf === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for right front tire condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.tirecondition_lr === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for left rear tire condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.tirecondition_rr = null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for right rear tire condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.wipercondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for wiper condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.airfiltercondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for air filter condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.brakefluid === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for brake fluid')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.powersteeringfluid === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for power steering fluid')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.transmissionfluid === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for transmission fluid')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.oillevel === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for oil level')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.washerfluid === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for washer fluid')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.coolantlevel === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input text for coolant level')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.coolantlevel_strength === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input text for coolant level strength')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.radiatorhosecondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for radiator hose condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.batterycondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for battery condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.serpentinebeltcondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for serpentine belt condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.otherbeltscondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for other belts condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.lubehoodlatch === null ) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for lube hood latch')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.shockstruttest === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for shock strut test')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.frontwheelbearingtest === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for front wheel bearing test ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.tierodtest === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for tie rod test ')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.balljointtest === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for ball joint test')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.controlarmcondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for control arm condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.stabilizerbarlinkcondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for stabilizer barlink condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.cvbootcondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for cv boot condition')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.frontbrakecondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent("Please input either a 'good' 'fair' 'poor' for front break condition")
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.frontbrakecalipers === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent("Please input either a 'good' 'fair' 'poor' for front brake calipers")
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.reardiscbrakecondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent("Please input either a 'good' 'fair' 'poor' for rear disc brake condition")
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.rearbrakecalipers === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for rear break calipers')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.rearstabilizerbarlinkcondition === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for rear stabilizer barlink')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.torqueallwheelsremoved === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for exhaust system')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.exhaustsystem === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please input either a pass or fail for exhaust system')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.enginescancodes === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent("Please make sure engine scan codes field isn't empty")
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
    if (checklist.oilchange === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please select either a yes or no for oil changed required')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
    }
  //   if (checklist.vehicle_observations === null) {
  //  $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title("Please make sure vehicle observations field isn't empty")
  //       .textContent('6')
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Ok')
  //       .targetEvent(checklist)
  //   );
  //   return 
  //   }
  //   if (checklist.recommended_repairs === null) {
  //  $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('Missing Checklist Item')
  //       .textContent("Please make sure recommended repairs field isn't empty")
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Ok')
  //       .targetEvent(checklist)
  //   );
  //   return 
  //   }
  //   if (checklist.repairs_declined === null) {
  //  $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('Missing Checklist Item')
  //       .textContent("Please make sure repairs declined field isn't empty")
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Ok')
  //       .targetEvent(checklist)
  //   );
  //   return 
  //   }
  //   if (checklist.parts_installed === null) {
  //  $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('Missing Checklist Item')
  //       .textContent('Please input parts installed below')
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Ok')
  //       .targetEvent(checklist)
  //   );
  //   return 
  //   }
  //   if (checklist.cost === null) {
  //  $mdDialog.show(
  //     $mdDialog.alert()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .clickOutsideToClose(true)
  //       .title('Missing Checklist Item')
  //       .textContent('Please make sure cost has a value')
  //       .ariaLabel('Alert Dialog Demo')
  //       .ok('Ok')
  //       .targetEvent(checklist)
  //   );
  //   return 
  //   }
    if (checklist.current_mileage === null) {
   $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Missing Checklist Item')
        .textContent('Please make sure current mileage has a value')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(checklist)
    );
    return 
  }
   else {
      checklist.checklist_status = 'serviced';
      checklist.checklist_id = $routeParams.checklist_id;
      ChecklistService.submitChecklist(vm.cars_checklist.info)
      swal ({
        title: "Checklist has been submitted!" ,
        text: " Thank you " + checklist.mechanics , 
        icon: "success" 
      })
      $location.path('/mechanic')
    }

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
