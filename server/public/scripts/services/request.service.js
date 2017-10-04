myApp.service('RequestService', function($http, $location) {
    console.log("RequestService loaded");
    //"this" refers to request.service.js
    var vm = this;
    
    vm.addCustomer = function(customer){
        console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function(response){
            console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
            $location.path('/cars');
        })//end of addCustomer http POST request
    }

    vm.addCustomerNoEmail = function (customer) {
        console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function (response) {
            console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
            $location.path('/cars');
        })//end of addCustomer http POST request
    }

    vm.updateCustomer = function (z,x){
       vm.data = {service_status: z, 
        index: x}
        $http({
            method: 'PUT',
            url: '/requestservice/updateService',
            data: vm.data
        }).then(function(response){
            console.log(response);
            
        })
    }
});

    
  