myApp.controller('MechanicController', function(AdminService, ChecklistService) {
  console.log('MechanicController created');
  var vm = this;
  vm.AdminService = AdminService;
  ChecklistService.getChecklistsStatus();
  vm.carsStatus = ChecklistService.carsStatus;

});
