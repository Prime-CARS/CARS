myApp.controller('AuthController', function (AuthService) {
   console.log('AuthController created');

   var self = this;
   self.AuthService = AuthService;
   self.serviceObject = AuthService.serviceObject;

   AuthService.getAuth().then(function() {console.log('self.serviceObject', self.serviceObject)})
   




});