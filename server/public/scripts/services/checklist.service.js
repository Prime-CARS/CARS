myApp.service('ChecklistService', ['$http', function($http){
    let vm = this;

    vm.carsStatus = { list: [] };
    vm.carChecklist = { checklist: {} };

    vm.getChecklistsStatus = function () {
        $http.get('/checklist').then(function (response) {
            vm.carsStatus.list=response.data;
            console.log('List of vehicles queued for/during service: ', vm.carsStatus);
        })
    }

    vm.getCarChecklist = function (checklist_id) {
        $http.get('/checklist/' + checklist_id).then(function (response) {
            vm.carChecklist.checklist = response.data;
            console.log('Vehicles checklist: ', vm.carChecklist);
        })
    }

    vm.submitChecklist = function (checklist) {
        $http.put('/checklist/submit', checklist).then(function (response) {
            console.log('Checklist sent status: ', response.data);
        })
    }
}]);