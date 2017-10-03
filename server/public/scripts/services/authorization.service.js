myApp.service('AuthService', function ($http, $location) {
   console.log('AuthService Loaded');

   self = this
   self.userObject = {};
   self.Requests = { list: [] }
   self.PrintPage = {};

   self.getAuth = function () {
      $http.get('/authorization').then(function (response) {
         console.log('getAuth', response.data);
         self.serviceObject = response.data[self.PrintPage];
         $location.path('/authorization');

      })
   }

});
