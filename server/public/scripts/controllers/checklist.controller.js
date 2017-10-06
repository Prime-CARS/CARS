myApp.controller('ChecklistController', function(ChecklistService, $routeParams) {
  console.log('ChecklistController created');
  var vm = this;
  vm.ChecklistService = ChecklistService;

  vm.cars_checklist = {};

  // Call to populate Checklist 
  ChecklistService.getCarChecklist($routeParams.checklist_id);
  vm.carChecklist = ChecklistService.carChecklist;

  vm.IsVisible = false;


  vm.showOilRequired = function (value) {
    vm.IsVisible = value == 'Y';
  };

});
