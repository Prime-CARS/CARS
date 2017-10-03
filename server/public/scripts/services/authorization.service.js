myApp.service('AuthService', function ($http, $location) {
   console.log('AuthService Loaded');

   self = this
   self.userObject = {};
   self.Requests = { list: [] }

   self.getAuth = function () {
      $http.get('/authorization').then(function (response) {
         console.log('getAuth', response.data);
         self.serviceObject = response.data;

      })
   }

});
