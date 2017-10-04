myApp.controller('ChecklistController', function(ChecklistService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.ChecklistService = ChecklistService;

  vm.cars_checklist = {};

  // Call to populate Checklist 
  ChecklistService.getCarChecklist($routeParams.checklist_id);
  vm.carChecklist = ChecklistService.carChecklist;

  


  // might need to change that to check userservice.userobject for current log-in
  // vm.userObject = ChecklistService.userObject;
});
