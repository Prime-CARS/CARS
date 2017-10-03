myApp.controller('LandingPageController', function($http) {
  console.log('LandingPageController created');
  var vm = this;

  //login check
  $http.get('/user').then(function (response) {
    console.log('Checking current user: ', response.data);
    vm.userObject = response.data;
  });
});