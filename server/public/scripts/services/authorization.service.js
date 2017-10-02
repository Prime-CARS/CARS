myApp.service('AdminService', function ($http, $location) {
   console.log('AdminService Loaded');

   vm = this
   vm.userObject = {};
   vm.Requests = { list: [] }

   vm.getAuth = function () {
      $http.get('/RequestsForService').then(function (response) {
         console.log('getRequests', response);
         vm.Requests.list = response;

      })
   }

});
