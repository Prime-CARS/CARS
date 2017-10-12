myApp.controller('AuthController', function (AuthService, RequestService) {
    console.log('AuthController created');

    $('.maskPhone').mask('(000) 000-0000');

    var self = this;
    AuthService.getAuth()
    self.date = new Date();
    self.test = {this:'wtf'};
    self.AuthService = AuthService.serviceObject
    self.serviceObject = AuthService.serviceObject;
    self.serviceTest = AuthService.serviceTest;

    

    self.updateCustomer = function (z, x) {
        self.saveAuth();
        RequestService.updateCustomer(z, x)
    }

    self.printDiv = function () {
        self.saveAuth();
        window.print();
        
    }

    self.saveAuth = function () {
        console.log('saveAuth hit serviceObject is', self.serviceObject);
        AuthService.saveObject(self.serviceObject)
    }

    // scope.$watch('serviceObject', self.logMe, true)

    // $('authName').css('width', ((authName.getAttribute('ng-model').length + 1) * 8) + 'px');
    // $('authSR').css('width', ((authSR.getAttribute('ng-model').length + 1) * 8) + 'px');

});

