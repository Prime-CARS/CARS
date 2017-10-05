myApp.service('RequestService', function ($http, $location) {
    console.log("RequestService loaded");
    //"this" refers to request.service.js
    var vm = this;


    vm.sendMail = function () {
        console.log("sendMail function has been clicked in request.service line 7");
        $http.post('/mail').then(function (response) {
            console.log("This is the respose: ", response);
        });//end of http POST sendMail request
    };//end of sendMail function


    vm.addCustomer = function (customer) {
        console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function (response) {
            console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
            vm.sendMail();
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

    vm.updateCustomer = function (z, x) {
        vm.data = {
            index: z,
            service_status: x
        }
        console.log('Update Customer hit on service');
        
        $http({
            method: 'PUT',
            url: '/requestservice/updateService',
            data: vm.data
        }).then(function (response) {
            console.log('Customer service update: ', response.data);
            $http({
                method: 'POST',
                url: '/requestservice/updateService/addChecklist',
                data: vm.data
            }).then(function (response) {
                console.log('Customer checklist added: ', response.data);
            })
        })//end of .then 
    } //end of http POST request
}); // end of myApp.service module



