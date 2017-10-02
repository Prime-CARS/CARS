myApp.controller('AuthorizationController', function (AdminService) {
   console.log('AuthorizationController created');

   var self = this;
   self.AdminService = AdminService;
   self.userObject = AdminService.userObject;

   AdminService.getReq





});