myApp.service('RequestService', function ($http, $location) {
  //console.log("RequestService loaded");
    //"this" refers to request.service.js
    var vm = this;

    vm.sendMail = function () {
      //console.log("sendMail function has been clicked in request.service line 7");
        $http.post('/mail').then(function (response) {
          //console.log("This is the respose: ", response);
        });//end of http POST sendMail request
    };//end of sendMail function


    vm.addCustomer = function (customer) {
      //console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function (response) {
          //console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
            vm.sendMail();
            swal({
                title: 'Thank you!',
                text: 'Your request has been recieved you will recieve a call shortly.',
                type: 'success',
            })
            $location.path('/cars');
        })//end of addCustomer http POST request
    }

    vm.addCustomerNoEmail = function (customer) {
      //console.log("This is the new customer being added to the database - request.service.js line 8: ", customer);
        $http({
            method: 'POST',
            url: '/requestservice',
            data: customer
        }).then(function (response) {
          //console.log("http service has made a POST request for customers in request.service.js line 13: ", response.data);
            swal({
                title: 'request has been added',
                type: 'success'
            })
            $location.path('/admin');
        })//end of addCustomer http POST request
    }

    vm.updateCustomer = function (z, x) {
      //console.log('request service updateCustomer z', z);
      //console.log('request service updateCustomer x', x);

        if (x === 'scheduled') {
            vm.data = {
                index: z,
                service_status: x
            }
          //console.log('"scheduled" Update Customer hit on service');
            $http({
                method: 'PUT',
                url: '/requestservice/updateService',
                data: vm.data
            }).then(function (response) {
              //console.log('Customer service update: ', response.data);
                $http({
                    method: 'POST',
                    url: '/checklist/addChecklist',
                    data: vm.data
                }).then(function (response) {
                  //console.log('Customer checklist added: ', response.data);
                })
            })//end of .then 
        } else if (x === 'printed') {
            vm.data = {
                index: z,
                service_status: x
            }
          //console.log('"printed" Update Customer hit on service');
            $http({
                method: 'PUT',
                url: '/requestservice/updateService',
                data: vm.data
            }).then(function (response) {
              //console.log('Customer service update: ', response.data);
            })//end of .then 
        } else if (x === 'denied') {
            vm.data = {
                index: z,
                service_status: x
            }
          //console.log('"denied" Update Customer hit on service');
            $http({
                method: 'PUT',
                url: '/requestservice/updateService',
                data: vm.data
            }).then(function (response) {
              //console.log('Customer service update: ', response.data);
            })//end of .then 
        } else {
            $http({
                method: 'PUT',
                url: '/requestservice/updateService',
                data: vm.data
            }).then(function (response) {
              //console.log('Customer service is declined: ', response.data);
            })
        }
    }
});// end of myApp.service module