myApp.service('RequestService', function($http, $location) {
    console.log("RequestService loaded");
    //"this" refers to request.service.js
    var vm = this;
    vm.customer = {service_status: requested};
    
    vm.addCustomer = function(customer){
        console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function(response){
            console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
        })//end of addCustomer http POST request
    }
});

    
  