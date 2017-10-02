myApp.service('RequestService', function($http, $location) {
    console.log("RequestService loaded");
    //"this" refers to request.service.js
    var vm = this;
    vm.customer = {};
    vm.vehicle = {};

    vm.addCustomer = function(customer){
        console.log("This is the new customer being added to the database - request.service.js line 7: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function(response){
            console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
           // vm.addVehicle(vm.vehicle);
        })//end of addCustomer http POST request
    }//end of addCustomer function

    vm.addVehicle = function(vehicle){
        console.log("This is the new vehicle being added to the db - request.service.js line 19: ", vehicle);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: vehicle
        }).then (function(response){
            console.log("http service has made a POST request for vehicles in request.service.js line 25: ", response.data);
        }) //end of addVehicle http POST request
    } //end of addVehicle function
});