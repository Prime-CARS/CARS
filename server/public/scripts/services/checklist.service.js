myApp.service('ChecklistService', ['$http', function($http){
    self.carsStatus = { list: [] };

    self.getChecklistsStatus = () => {
        $http.get('/checklist').then(function (response) {
            self.carsStatus.list=response.data;
            console.log('List of vehicles queued for/during service: ', self.carsStatus);
        })
    }
}]);