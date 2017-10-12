myApp.service('ChecklistService', ['$http', function ($http) {
    let vm = this;

    vm.carsStatus = { list: [] };
    vm.vehicleInfo = { info: {} };

    vm.getChecklistsStatus = function () {
        $http.get('/checklist').then(function (response) {
            vm.carsStatus.list = response.data;
            console.log('List of vehicles queued for/during service: ', vm.carsStatus);
        })
    }

    vm.getVehicleInfo = function (checklist_id) {
        $http.get('/checklist/' + checklist_id).then(function (response) {
            vm.vehicleInfo.info = response.data;
            // console.log('Vehicles Info: ', vm.vehicleInfo);
        })
    }

    vm.submitChecklist = function (checklist) {
        console.log('Checklist object: ', checklist);
        
        $http.put('/checklist/submit', checklist).then(function (response) {
            // console.log('Status of checklist being submitted: ', response.data);
        })
    }

    vm.deleteChecklist = function (userObject) {
        console.log('Checklist deleted at: ', userObject);
        $http.delete('/checklist/' + userObject.checklist_id).then(function (response) {
            vm.getChecklistsStatus();
            //Checklist has been deleted: changing customer status to canceled

            $http.put('/requestservice/cancelService', userObject).then(function (response) {
                console.log('Customer updated: ', response.data);
            })
        })
    }
}]);