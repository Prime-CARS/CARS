myApp.controller('AuthController', function (AuthService, RequestService, $scope) {
    console.log('AuthController created');

    var self = this;
    self.AuthService = AuthService;
    self.serviceObject = AuthService.serviceObject;
    scope = $rootScope;    
    scope.serviceObject = AuthService.serviceObject;
    self.date = new Date();

    AuthService.getAuth()

    self.updateCustomer = function (z, x) {
        RequestService.updateCustomer(z, x)
    }

    self.printDiv = function () {
        window.print();
    }

    self.logMe = function () {
        console.log('logMe!');
    }

    scope.$watch('serviceObject', self.logMe, true)


});

// AuthService.saveObject(self.serviceObject)
