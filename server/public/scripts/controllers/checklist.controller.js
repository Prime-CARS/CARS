myApp.controller('ChecklistController', function(ChecklistService) {
  console.log('ChecklistService created');
  var vm = this;
  vm.ChecklistService = ChecklistService;

  // Call to populate Checklist service's carsStatus.list
  ChecklistService.getChecklistsStatus();
  vm.carsStatus = ChecklistService.carsStatus;

  // might need to change that to check userservice.userobject for current log-in
  // vm.userObject = ChecklistService.userObject;
});
