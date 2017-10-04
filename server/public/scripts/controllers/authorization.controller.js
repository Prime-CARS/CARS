myApp.controller('AuthController', function (AuthService) {
   console.log('AuthController created');

   var self = this;
   self.AuthService = AuthService;
   self.serviceObject = AuthService.serviceObject;

   AuthService.getAuth()
   
   self.printDiv = function(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
   }

});
   

