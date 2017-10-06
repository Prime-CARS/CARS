myApp.controller('MechanicController', function (AdminService, ChecklistService, $location, $http) {
  console.log('MechanicController created');
  var vm = this;
  vm.AdminService = AdminService;

  ChecklistService.getChecklistsStatus();
  vm.carsStatus = ChecklistService.carsStatus;

  // handles current user role in case of log in/log out
  // checking if current user is a mechanic or admin
  AdminService.getuser();


});
