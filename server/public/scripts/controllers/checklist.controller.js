myApp.controller('ChecklistController', function(ChecklistService) {
  console.log('ChecklistService created');
  var vm = this;
  vm.ChecklistService = ChecklistService;
  vm.userObject = ChecklistService.userObject;
});
