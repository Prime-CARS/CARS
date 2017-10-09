myApp.service('ChecklistService', ['$http', function($http){
    let vm = this;

    vm.carsStatus = { list: [] };
    vm.vehicleInfo = { info: {} };

    vm.getChecklistsStatus = function() {
        $http.get('/checklist').then(function (response) {
            vm.carsStatus.list=response.data;
            console.log('List of vehicles queued for/during service: ', vm.carsStatus);
        })
    }

    vm.getVehicleInfo = function(checklist_id) {
        $http.get('/checklist/' + checklist_id).then(function (response) {
            vm.vehicleInfo.info = response.data;
            console.log('Vehicles Info: ', vm.vehicleInfo);
        })
    }

    vm.submitChecklist = function (checklist) {
        $http.put('/checklist/submit', checklist).then(function (response) {
            console.log('Status of checklist being submitted: ', response.data);
            
        })
    }

    vm.submitChecklist = function (checklist) {
        $http.put('/checklist/submit', checklist).then(function (response) {
            console.log('Checklist sent status: ', response.data);
        })
    }
}]);