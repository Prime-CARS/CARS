myApp.controller('LandingPageController', function(AdminService, $http) {
  console.log('LandingPageController created');
  var vm = this;
  vm.AdminService = AdminService;
  
  //login check
  $http.get('/user').then(function (response) {
    console.log('Checking current user: ', response.data);
    vm.userObject = response.data;
  });
});