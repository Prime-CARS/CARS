myApp.controller('MechanicController', function(AdminService, ChecklistService, $location) {
  console.log('MechanicController created');
  var vm = this;
  vm.AdminService = AdminService;
  
  ChecklistService.getChecklistsStatus();
  vm.carsStatus = ChecklistService.carsStatus;

  vm.getChecklist = () => {
    console.log('Checklist button clicked!');
  }

});
