myApp.service('ChecklistService', ['$http', function($http){
    self.carsstatus = { list: [] };

    self.getChecklistsStatus = () => {
        $http.get('/checklist').then(function (response) {
            self.carsstatus.list=response.data;
        })
    }
}]);