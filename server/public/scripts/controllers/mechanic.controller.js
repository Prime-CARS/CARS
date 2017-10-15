myApp.controller('MechanicController', function (AdminService, ChecklistService, $location) {
  console.log('MechanicController created');
  var vm = this;
  vm.AdminService = AdminService;

  ChecklistService.getChecklistsStatus();
  vm.carsStatus = ChecklistService.carsStatus;

  // handles current user role in case of log in/log out
  // checking if current user is a mechanic or admin
  AdminService.getuser();

  //highlights "Mechanic" on nav bar when on that page
  vm.currentNavItem = "mechanicTab";
  
  vm.cancelChecklist = function (userData) {
    swal({
      title: 'Are you sure you want to cancel service?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, I want to cancel service',
      cancelButtonText: 'No'
    }).then(function () {
      swal({
        text: 'Service has been canceled',
        type: 'error'
      })
      ChecklistService.deleteChecklist(userData);
    }, function (dismiss) {
      if (dismiss === 'cancel') {
        swal({
          text: 'Checklist resumed for service',
          type: 'info'
        })
      }
    })
  }
});
