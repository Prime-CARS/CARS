myApp.service('AuthService', function ($http, $location) {
   console.log('AuthService Loaded');

   self = this
   self.userObject = {};
   self.Requests = { list: [] }

   self.getAuth = function (c) {
      $http.get('/authorization').then(function (response) {
         self.serviceObject = response.data[c];
         console.log('self.serviceObject is', self.serviceObject);
         
         $location.path('/authorization');

      })
   }

});
