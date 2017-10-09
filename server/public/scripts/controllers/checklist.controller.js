myApp.controller('ChecklistController', function (ChecklistService, AdminService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.AdminService = AdminService;
  vm.ChecklistService = ChecklistService;
  
  // Call to populate Checklist 
  ChecklistService.getCarChecklist($routeParams.checklist_id);
  
  vm.cars_checklist = { checklist_id: $routeParams.checklist_id };
  vm.carChecklist = ChecklistService.carChecklist;

  vm.IsVisible = false;

  vm.goto = function (page) {
    console.log("Goto " + "'" + page + "'");
    $location.path("'" + page + "'")
  }

  vm.showOilRequired = function (value) {
    vm.IsVisible = value == 'Y';
  };


  vm.submitChecklist = function (checklist) {
    console.log('Checklist is clicked: ', checklist);
    ChecklistService.submitChecklist(checklist);
    // if (
    //   checklist.headlights_high&& 
    //   checklist.headlights_low&& 
    //   checklist.parkinglights_front&& 
    //   checklist.turnsignals_front&& 
    //   checklist.taillights&& 
    //   checklist.turnsignals_rear&& 
    //   checklist.brakelights&& 
    //   checklist.backup_lights&& 
    //   checklist.licensetabs_expiration&& 
    //   checklist.sparetirepressure&& 
    //   checklist.currenttirepressure_lf&& 
    //   checklist.currenttirepressure_rf&& 
    //   checklist.currenttirepressure_lr&& 
    //   checklist.currenttirepressure_rr&& 
    //   checklist.finaltirepressure_lf&& 
    //   checklist.finaltirepressure_rf&& 
    //   checklist.finaltirepressure_lr&& 
    //   checklist.finaltirepressure_rr&& 
    //   checklist.tirecondition_lf&& 
    //   checklist.tirecondition_rf&& 
    //   checklist.tirecondition_lr&& 
    //   checklist.tirecondition_rr&& 
    //   checklist.wipercondition&& 
    //   checklist.airfiltercondition&& 
    //   checklist.brakefluid&& 
    //   checklist.powersteeringfluid&& 
    //   checklist.transmissionfluid&& 
    //   checklist.oillevel&& 
    //   checklist.washerfluid&& 
    //   checklist.coolantlevel&& 
    //   checklist.coolantlevel_strength&& 
    //   checklist.radiatorhosecondition&& 
    //   checklist.batterycondition&& 
    //   checklist.serpentinebeltcondition&& 
    //   checklist.otherbeltscondition&& 
    //   checklist.lubehoodlatch&& 
    //   checklist.shockstruttest&& 
    //   checklist.frontwheelbearingtest&& 
    //   checklist.tierodtest&& 
    //   checklist.balljointtest&& 
    //   checklist.controlarmcondition&& 
    //   checklist.stabilizerbarlinkcondition&& 
    //   checklist.cvbootcondition&& 
    //   checklist.frontbrakecondition&& 
    //   checklist.frontbrakecalipers&& 
    //   checklist.reardiscbrakecondition&& 
    //   checklist.rearbrakecalipers&& 
    //   checklist.rearstabilizerbarlinkcondition&& 
    //   checklist.torqueallwheelsremoved&& 
    //   checklist.exhaustsystem&& 
    //   checklist.enginescancodes&& 
    //   checklist.current_mileage) {
    //     checklist.status = 'serviced';
    //     console.log('Checklist status: ', checklist.status);
    //   } else {
    //     console.log('checklist status not checked');
    //   }
  }
});
