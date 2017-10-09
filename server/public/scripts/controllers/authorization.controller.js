myApp.controller('AuthController', function (AuthService, RequestService) {
   console.log('AuthController created');

   var self = this;
   self.AuthService = AuthService;
   self.serviceObject = AuthService.serviceObject;

   AuthService.getAuth()

   self.updateCustomer = function (z,x){
       RequestService.updateCustomer(z,x)
   }
      
   self.printDiv = function() {
      window.print();
   }

});
   

