myApp.controller('AuthController', function (AuthService, RequestService, AdminService, $location) {
  //console.log('AuthController created');

    $('.maskPhone').mask('(000) 000-0000');

    var self = this;
    AuthService.getAuth()
    self.date = new Date();
    self.test = {this:"test"};
    self.AuthService = AuthService.serviceObject
    self.serviceObject = AuthService.serviceObject;
    self.serviceTest = AuthService.serviceTest;
    self.AdminService = AdminService;

    //highlights "Admin" on nav bar when user is on page
    self.currentNavItem = "adminTab";

    self.updateCustomer = function (z, x) {
        // console.log('z',z);
        // console.log('x', x);
        
        self.saveAuth();
        RequestService.updateCustomer(z, x)
        AdminService.getRequests();
        $location.path('/admin'); 
    }

    self.printDiv = function () {
        self.saveAuth();
        window.print();
        
    }

    self.saveAuth = function () {
      //console.log('saveAuth hit serviceObject is', self.serviceObject);
        AuthService.saveObject(self.serviceObject)
    }

});

