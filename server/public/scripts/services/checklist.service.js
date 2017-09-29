myApp.service('ChecklistService', ['$http', function($http){
    let vm = this;

    vm.carsStatus = { list: [] };

    vm.getChecklistsStatus = () => {
        $http.get('/checklist').then(function (response) {
            vm.carsStatus.list=response.data;
            console.log('List of vehicles queued for/during service: ', vm.carsStatus);
        })
    }
}]);